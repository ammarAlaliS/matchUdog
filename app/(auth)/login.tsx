import { BottomSheetSlideUp } from '@/components/animatedComponents/BottomSheetSlideUp';
import ButtonAuth from '@/components/features/auth/ButtonAuth';
import LoginForm from '@/components/features/auth/LoginForm';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import SingInOption from '@/components/ui/SingInOption';
import { useFontsLoader } from '@/utils/useFontsLoader';
import { useMemo } from 'react';
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { createAppStyles } from '../../theme/styles';

export default function LoginScreen() {
  const { theme } = useTheme();
  const styles = useMemo(() => createAppStyles(theme), [theme]);
  const fontsLoaded = useFontsLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{
      flex: 1,

    }}>
      <AntigravityBackground
        colors={
          theme.dark
           ? ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
            : ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]}
        blurIntensity={100}
        shapeColor={theme.colors.background}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, width: '100%' }}
      >
        
          
            <View style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'transparent',
            }}>
              <View style={{
                
                height: 200,
                backgroundColor: 'transparent',
              }} />
              <View
                style={{
                flex: 1,
                
              }}
              >
                <BottomSheetSlideUp styles={styles} theme={theme}>
                  <Text style={[styles.typography.h3, {
                    textAlign: 'center',
                    marginBottom: theme.spacing.s,
                  }]}>Ingresar</Text>
                  <Text style={[styles.typography.label, {
                    textAlign: 'center',
                    marginBottom: theme.spacing.l,
                  }]}>Te damos la bienvenida nuevamente</Text>

                  <LoginForm />

                  <SingInOption />

                  <View style={{
                    gap: theme.spacing.m,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '100%',
                    flex: 1,
                  }}>
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

                  
                </BottomSheetSlideUp>
              </View>
            </View>
  
      </KeyboardAvoidingView>
    </View>
  );
}

