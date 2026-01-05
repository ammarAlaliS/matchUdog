import { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createAppStyles } from "../theme/styles";
import { useTheme } from "../theme/useTheme";

export default function Index() {
  const { theme, setMode, mode } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);

  return (
    <View style={styles.layout.container}>
      <Text style={styles.typography.title}>MatchUdog Theme System</Text>
      <Text style={styles.typography.subtitle}>Current Mode: {mode.toUpperCase()}</Text>
      
      <View style={styles.components.buttonContainer}>
        <TouchableOpacity style={styles.components.button} onPress={() => setMode('light')}>
            <Text style={styles.components.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.components.button} onPress={() => setMode('dark')}>
            <Text style={styles.components.buttonText}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.components.button} onPress={() => setMode('system')}>
            <Text style={styles.components.buttonText}>System</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.typography.caption}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
