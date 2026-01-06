import { useRouter } from 'expo-router';
import { useState } from 'react';
import Toast from 'react-native-toast-message';
import { useAuthStore } from '../stores/auth.store';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const login = async (values: { email: string; password: string }, { resetForm }: any) => {
    try {
      setIsLoading(true);
      
      // MOCK LOGIN - Replace with actual API call
      // const response = await fetch('https://api.tuapp.com/login', ...);
      // if (!response.ok) throw new Error('Credenciales incorrectas');
      // const data = await response.json();
      
      // Simulation of successful login
      const mockUser = { id: '1', email: values.email, name: 'User Test' };
      const mockToken = 'mock-jwt-token';
      
      setAuth(mockUser, mockToken);

      Toast.show({
        type: 'success',
        text1: 'Inicio de sesión exitoso',
      });

      resetForm();
      router.replace('/(tabs)');

    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    useAuthStore.getState().logout();
    router.replace('/(auth)/welcome');
  };

  return { login, logout, isLoading };
};

