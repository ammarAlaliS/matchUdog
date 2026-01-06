import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { createAppStyles } from '../../theme/styles';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);

  return (
    <View style={styles.layout.container}>
      <Text style={styles.typography.h2}>MatchUdog</Text>
      <Text style={styles.typography.sub}>Start Swiping!</Text>
      {/* Placeholder for Swipe Card Deck */}
      <View style={{ height: 300, width: '100%', backgroundColor: theme.colors.card, borderRadius: theme.borderRadius.l, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.typography.body}>Dog Card Placeholder</Text>
      </View>
    </View>
  );
}
