import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { BottomSheetSlideUp } from '@/components/animatedComponents/BottomSheetSlideUp';
import ButtonWelcome from '@/components/features/auth/ButtonWelcome';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { useTheme } from '../../hooks/useTheme';
import { useFontsLoader } from '../../utils/useFontsLoader';

const { height, width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  const fontsLoaded = useFontsLoader();
  if (!fontsLoaded) return null;

  const topHeight = height * 0.45; 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>

      <AntigravityBackground
        colors={
          theme.dark
            ? ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
            : ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
        }
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />
      <Animated.View
        entering={FadeInDown.duration(1500).springify()}
        style={[styles.top, { height: topHeight }]}
      >
        <Image
          source={require('../../assets/images/welcome-logo.png')}
          style={styles.image}
        />
      </Animated.View>

      <BottomSheetSlideUp styles={styles} theme={theme}>
        <Text style={styles.title}>Bienvenido a MatchDoggy</Text>
          
        <Text style={styles.subtitle}>
          Encontrar el compañero perfecto para tu amigo peludo nunca ha sido tan fácil.
        </Text>

        <View style={styles.step}>
          <View style={styles.circle} />
          <Text style={styles.stepText}>
            Crea un perfil para tu perro con fotos y detalles únicos.
          </Text>
        </View>

        <View style={styles.step}>
          <View style={styles.circle} />
          <Text style={styles.stepText}>
            Explora perfiles de otros perros en tu área.
          </Text>
        </View>

        <View style={styles.step}>
          <View style={styles.circle} />
          <Text style={styles.stepText}>
            Conecta y organiza citas de juego seguras y divertidas.
          </Text>
        </View>

        <ButtonWelcome />
      </BottomSheetSlideUp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
  },

  whiteContainer: {
    flex: 1,
    paddingTop: 60, 
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    color: '#111827',
  },

  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },

  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  circle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E6F4F1',
    marginRight: 12,
  },

  stepText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
  },

  button: {
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
