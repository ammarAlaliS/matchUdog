import { useTheme } from '@/hooks/useTheme';

import { useAuth } from '@/hooks/useAuth';
import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createAppStyles } from '../../theme/styles';

export default function ProfileScreen() {
  const { theme, setMode, mode } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);
  const { logout } = useAuth();


  return (
    <View style={styles.layout.container}>
      <Text style={styles.typography.h2}>My Profile</Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={styles.typography.subLg}>Theme Settings</Text>
        <View style={styles.components.btnGrp}>
          <TouchableOpacity style={styles.components.btn} onPress={() => setMode('light')}>
            <Text style={styles.components.btnTxt}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.components.btn} onPress={() => setMode('dark')}>
            <Text style={styles.components.btnTxt}>Dark</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.components.btn} onPress={() => setMode('system')}>
            <Text style={styles.components.btnTxt}>System</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.typography.caption}>Current: {mode}</Text>
      </View>

      <View style={{ marginTop: 'auto', marginBottom: 20 }}>
        <TouchableOpacity
          style={[styles.components.btn, { backgroundColor: '#ff4444' }]}
          onPress={logout}
        >
          <Text style={styles.components.btnTxt}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

