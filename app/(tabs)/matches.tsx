import { useTheme } from '@/hooks/useTheme';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { createAppStyles } from '../../theme/styles';

export default function MatchesScreen() {
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);

  return (
    <View style={styles.layout.container}>
      <Text style={styles.typography.h2}>Your Matches</Text>
      <Text style={styles.typography.body}>No matches yet. Keep swiping!</Text>
    </View>
  );
}
