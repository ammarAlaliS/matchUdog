import { useTheme } from '@/hooks/useTheme';
import { createAppStyles } from '@/theme/styles';
import { useMemo } from 'react';

export function useAppStyles() {
    const { theme } = useTheme();
    const styles = useMemo(() => createAppStyles(theme), [theme]);
    return styles;
}
