import { API_CONFIG, getApiUrl } from '@/config/api.config';
import { useAuthStore } from '@/stores/auth.store';
import { emitAuthExpired } from '@/utils/auth.events';
import { KEYS, secureStorage } from '@/utils/secure-storage';

type FetchOptions = Omit<RequestInit, 'body'> & { body?: any };

const DEFAULT_TIMEOUT = API_CONFIG.TIMEOUT_MS || 15000;

async function timeoutFetch(input: RequestInfo, init: RequestInit = {}, timeout = DEFAULT_TIMEOUT) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const res = await fetch(input, { ...init, signal: controller.signal });
        clearTimeout(id);
        return res;
    } catch (e) {
        clearTimeout(id);
        throw e;
    }
}

async function tryRefreshToken(): Promise<string | null> {
    const refreshToken = await secureStorage.getItem(KEYS.REFRESH_TOKEN);
    if (!refreshToken) return null;

    try {
        const res = await timeoutFetch(getApiUrl("REFRESH"), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh_token: refreshToken }),
        });

        if (!res.ok) return null;

        const data = await res.json();
        if (data?.token) {
            // Update store
            const user = useAuthStore.getState().user ?? null;
            useAuthStore.getState().setAuth(user as any, data.token);
        }
        if (data?.refresh_token) {
            await secureStorage.setItem(KEYS.REFRESH_TOKEN, data.refresh_token);
        }
        return data?.token ?? null;
    } catch (e) {
        return null;
    }
}

export async function apiFetch(endpoint: keyof typeof API_CONFIG.ENDPOINTS | string, options: FetchOptions = {}) {
    const isEndpointKey = (key: any) => typeof key === 'string' && Object.prototype.hasOwnProperty.call(API_CONFIG.ENDPOINTS, key);
    const url = isEndpointKey(endpoint) ? getApiUrl(endpoint as any) : (endpoint as string);

    const token = useAuthStore.getState().token;

    const headers: Record<string, string> = {
        ...(options.headers as Record<string, string> || {}),
    };

    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (options.body && typeof options.body !== "string") {
        headers["Content-Type"] = headers["Content-Type"] || "application/json";
    }

    const init: RequestInit = {
        method: options.method || "GET",
        headers,
        body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body,
    };

    let res = await timeoutFetch(url, init);

    if (res.status === 401) {
        // Try refresh flow once
        const newToken = await tryRefreshToken();
        if (newToken) {
            // Retry original request with new token
            const retryHeaders = { ...(init.headers as Record<string, string>), Authorization: `Bearer ${newToken}` };
            const retryInit = { ...init, headers: retryHeaders };
            res = await timeoutFetch(url, retryInit);
        } else {
            // Emit event so UI can react (show modal, notify, etc.)
            emitAuthExpired();

            // Logout and propagate (store cleared; navigation left to UI listeners)
            useAuthStore.getState().logout();
        }
    }

    return res;
}

export default { apiFetch };
