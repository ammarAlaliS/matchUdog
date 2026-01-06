import { Stack, useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AntigravityBackground } from '../components/ui/AntigravityBackground';
import { useTheme } from '../hooks/useTheme';
import { useAuthStore } from '../stores/auth.store';

export default function RootLayout() {
  const { theme, isDark } = useTheme();
  const { token } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [isHydrated, setIsHydrated] = useState(false);

  // Robust hydration check
  useEffect(() => {
    const checkHydration = async () => {
      // Wait for Zustand persistence to hydrate
      await useAuthStore.persist.rehydrate();
      setIsHydrated(true);
    };

    checkHydration();
  }, []);

  useEffect(() => {
    // Wait until hydration is finished and navigation is ready
    if (!isHydrated || !navigationState?.key) return;

    const inAuthGroup = segments[0] === '(auth)';

    const timer = setTimeout(() => {
      if (!token && !inAuthGroup) {
        router.replace('/(auth)/welcome');
      } else if (token && inAuthGroup) {
        router.replace('/(tabs)');
      }
    }, 1);

    return () => clearTimeout(timer);
  }, [token, segments, isHydrated, navigationState?.key]);

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <AntigravityBackground colors={theme.dark ? ["#040415ff", "#0606dfff"] : ["#E6F3FF", "#51a0e6ff"]} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}


