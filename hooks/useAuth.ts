import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import { apiFetch } from '../services/api.client';
import { AuthUser, useAuthStore } from '../stores/auth.store';
import { KEYS, secureStorage } from '../utils/secure-storage';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const login = async (values: { email: string; password: string }, { resetForm, setSubmitting }: any, remember: boolean) => {
    try {
      setIsLoading(true);

      const res = await apiFetch('LOGIN', {
        method: 'POST',
        body: {
          email: values.email,
          password: values.password,
        },
      });

      const data = await (async () => {
        try {
          return await res.json();
        } catch {
          const txt = await res.text();
          throw new Error(txt || `Error del servidor (${res.status})`);
        }
      })();

      if (!res.ok) {
        throw new Error(data.message || 'Credenciales incorrectas');
      }

      const user: AuthUser = {
        id: data.id,
        email: values.email,
        firstName: data.first_name,
        lastName: data.last_name,
        profileImgUrl: data.profile_img_url,
        isActive: data.isActive,
      };

      setAuth(user, data.token);
      if (remember) {
        await secureStorage.setItem(KEYS.REMEMBERED_EMAIL, values.email);
      } else {
        await secureStorage.removeItem(KEYS.REMEMBERED_EMAIL);
      }

      if (data.refresh_token) {
        await secureStorage.setItem(KEYS.REFRESH_TOKEN, data.refresh_token);
      }

      resetForm();
      router.replace('/(tabs)');

    } catch (error: any) {
      Alert.alert(
        error.name === 'AbortError' ? 'Tiempo de espera agotado' : 'Error',
        error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    useAuthStore.getState().logout();
    Promise.resolve(secureStorage.removeItem(KEYS.REFRESH_TOKEN)).catch(() => {});
    router.replace('/(auth)/welcome');
  };

  const getRememberedEmail = async () => {
    return await secureStorage.getItem(KEYS.REMEMBERED_EMAIL);
  };

  return { login, logout, getRememberedEmail, isLoading };
};
