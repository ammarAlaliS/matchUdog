import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { StateStorage } from 'zustand/middleware';

const KEYS = {
    AUTH: 'auth-secure-storage',
    REMEMBERED_EMAIL: 'remembered-email',
    REFRESH_TOKEN: 'refresh-token',
} as const;

// In-memory fallback for web to avoid persisting sensitive tokens in localStorage
const inMemoryStore: Record<string, string> = {};

/**
 * Secure Storage for sensitive data (tokens, credentials)
 * Uses expo-secure-store on native, uses in-memory on web for sensitive keys,
 * and uses localStorage only for non-sensitive UX keys (remembered email).
 */
export const secureStorage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        if (Platform.OS === 'web') {
            if (name === KEYS.REMEMBERED_EMAIL) {
                return localStorage.getItem(name);
            }
            return inMemoryStore[name] ?? null;
        }
        return await SecureStore.getItemAsync(name);
    },

    setItem: async (name: string, value: string): Promise<void> => {
        if (Platform.OS === 'web') {
            if (name === KEYS.REMEMBERED_EMAIL) {
                localStorage.setItem(name, value);
                return;
            }
            inMemoryStore[name] = value;
            return;
        }
        await SecureStore.setItemAsync(name, value);
    },

    removeItem: async (name: string): Promise<void> => {
        if (Platform.OS === 'web') {
            if (name === KEYS.REMEMBERED_EMAIL) {
                localStorage.removeItem(name);
                return;
            }
            delete inMemoryStore[name];
            return;
        }
        await SecureStore.deleteItemAsync(name);
    },
};

/**
 * JWT Token utilities
 */
const base64UrlDecode = (base64Url: string): string => {
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // Try native atob
    if (typeof atob === 'function') {
        try {
            return decodeURIComponent(
                atob(base64)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
        } catch {
            // fallback
        }
    }

    // Try Buffer (Node / some RN setups)
    try {
        // @ts-ignore
        if (typeof Buffer !== 'undefined') {
            // @ts-ignore
            return Buffer.from(base64, 'base64').toString('utf8');
        }
    } catch {
        // ignore
    }

    // Last resort: replace padding and decode manually
    try {
        const padding = '='.repeat((4 - (base64.length % 4)) % 4);
        const base64Padded = (base64 + padding).replace(/\-/g, '+').replace(/_/g, '/');
        // Basic polyfill using atob if available after padding
        // @ts-ignore
        if (typeof atob === 'function') {
            return decodeURIComponent(
                // @ts-ignore
                atob(base64Padded)
                    .split('')
                    .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
        }
    } catch {
        // give up
    }

    throw new Error('Unable to decode base64 payload');
};

export const jwtUtils = {
    /**
     * Decode JWT payload without verification
     */
    decode: (token: string): { exp?: number; iat?: number; id?: string } | null => {
        try {
            const parts = token.split('.');
            if (parts.length < 2) return null;
            const jsonPayload = base64UrlDecode(parts[1]);
            return JSON.parse(jsonPayload);
        } catch {
            return null;
        }
    },

    /**
     * Check if token is expired
     */
    isExpired: (token: string): boolean => {
        const payload = jwtUtils.decode(token);
        if (!payload?.exp) return false;

        const now = Math.floor(Date.now() / 1000);
        return payload.exp < now;
    },

    /**
     * Get time until expiration in seconds
     */
    getExpiresIn: (token: string): number | null => {
        const payload = jwtUtils.decode(token);
        if (!payload?.exp) return null;

        const now = Math.floor(Date.now() / 1000);
        return Math.max(0, payload.exp - now);
    },
};

export { KEYS };
