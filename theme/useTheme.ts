import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useThemeStore } from '../store/theme.store';
import { AppTheme, darkTheme, lightTheme } from './themes';

/**
 * Hook to access the current theme and resolved mode.
 * 
 * Logic:
 * 1. Get `mode` from Zustand store (light | dark | system)
 * 2. Get system scheme from `useColorScheme` (light | dark | null)
 * 3. Resolve final mode: if store is 'system', fallback to system scheme (defaulting to light if null)
 * 4. Return resolved mode and corresponding theme object
 */
export const useTheme = () => {
  const { mode: storeMode, setMode } = useThemeStore();
  const systemScheme = useColorScheme();

  const resolvedMode = useMemo<'light' | 'dark'>(() => {
    if (storeMode === 'system') {
      return systemScheme === 'dark' ? 'dark' : 'light';
    }
    return storeMode;
  }, [storeMode, systemScheme]);

  const theme: AppTheme = useMemo(() => {
    return resolvedMode === 'dark' ? darkTheme : lightTheme;
  }, [resolvedMode]);

  return {
    mode: resolvedMode, // The actual active visual mode
    storeMode,          // The setting value (e.g. 'system')
    setMode,            // Function to change mode
    theme,              // The full theme object
    isDark: resolvedMode === 'dark',
  };
};
