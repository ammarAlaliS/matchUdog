import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import BlurContainer from '@/components/ui/BlurContainer';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAppStyles } from '../../theme/styles';

export default function RegisterScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);

  const handleRegister = () => {
    // TODO: Implement registration logic
    router.replace('/(auth)/setup-profile');
  };

  return (
    <View style={styles.layout.container}>
      <AntigravityBackground
        colors={
          theme.dark
            ? ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
            : ["#51a0e6ff", "#E6F3FF", "#D6EBFF", "#C2E0FF", "#B3D9FF"]
        }
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <BlurContainer>
          <Text style={[styles.typography.h1, { fontFamily: 'ShadowsIntoLight_400Regular', textAlign: 'center' }]}>Doggy</Text>
          <Text style={styles.typography.h2}>Crear Cuenta</Text>

          <TouchableOpacity style={styles.components.btn} onPress={handleRegister}>
            <Text style={styles.components.btnTxt}>Crear Perfil (Mock)</Text>
          </TouchableOpacity>
        </BlurContainer>
      </SafeAreaView>
    </View>
  );
}
