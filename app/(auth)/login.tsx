import LoginForm from '@/components/features/auth/LoginForm';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';

import BlurContainer from '@/components/ui/BlurContainer';
import { useFontsLoader } from '@/utils/useFontsLoader';
import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { createAppStyles } from '../../theme/styles';

export default function LoginScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  // Using layout styles for consistency
  const styles = useMemo(() => createAppStyles(theme), [theme]);
  const fontsLoaded = useFontsLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.layout.container}>
      <AntigravityBackground
        colors={
          theme.dark
            ? [
              "#0606dfff",
              "#040427",
              "#040415ff",
              "#0606dfff",
              "#101064"
            ]
            : ["#51a0e6ff", "#E6F3FF", "#D6EBFF", "#C2E0FF", "#B3D9FF"]
        }
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />
      <SafeAreaView style={{ flex: 1, width: '100%' }}>
        <BlurContainer>
          <Text style={[styles.typography.h1, { fontFamily: 'ShadowsIntoLight_400Regular', textAlign: 'center' }]}>Doggy</Text>
          <Text style={[styles.typography.h2,]}>Inicia Sesion</Text>
          <Text style={[styles.typography.sub,]}>Te damos la bienvenida nuevamente</Text>
          <LoginForm />
        </BlurContainer>
      </SafeAreaView>
    </View>
  );
}
