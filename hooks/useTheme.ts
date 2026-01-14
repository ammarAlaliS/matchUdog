import { useThemeStore } from '@/stores/theme.store';
import { AppTheme, darkTheme, lightTheme } from '@/theme/themes';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';


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
    mode: resolvedMode, 
    storeMode,          
    setMode,            
    theme,   
    isDark: resolvedMode === 'dark',
  };
};
