import ButtonAuth from '@/components/features/auth/ButtonAuth';
import LoginForm from '@/components/features/auth/LoginForm';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import SingInOption from '@/components/ui/SingInOption';
import { useFontsLoader } from '@/utils/useFontsLoader';
import { useMemo } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { createAppStyles } from '../../theme/styles';

export default function LoginScreen() {
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);
  const fontsLoaded = useFontsLoader();
  const { height } = useWindowDimensions();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <AntigravityBackground
        colors={
          theme.dark
            ? ['rgb(0, 0, 0)', '#000000', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', '#0d0d0e']
            : ['rgb(0, 0, 0)', '#000000', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)', '#0d0d0e']
        }
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}              // iOS
          overScrollMode="never"
        >


          <View style={{ flex: 1, paddingHorizontal: theme.spacing.l }}>
            <Text
              style={[
                styles.typography.h3,
                { textAlign: 'center', marginBottom: theme.spacing.s },
              ]}
            >
              Ingresar
            </Text>

            <Text
              style={[
                styles.typography.label,
                { textAlign: 'center', marginBottom: theme.spacing.l },
              ]}
            >
              Te damos la bienvenida nuevamente
            </Text>

            <LoginForm />

            <SingInOption />

            <View
              style={{
                gap: theme.spacing.m,
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                marginTop: theme.spacing.m,
              }}
            >
              <View style={{ flex: 1 }}>
                <ButtonAuth
                  icon="google"
                  label="Google"
                  onPress={() => console.log('Google login')}
                />
              </View>

              <View style={{ flex: 1 }}>
                <ButtonAuth
                  icon="apple"
                  label="Apple"
                  onPress={() => console.log('Apple login')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
