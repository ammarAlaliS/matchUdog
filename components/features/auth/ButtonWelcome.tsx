import { AntigravityBackground } from '@/components/ui/AntigravityBackground';
import { useTheme } from '@/hooks/useTheme';
import { createAppStyles } from '@/theme/styles';
import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const ButtonWelcome = () => {
    const router = useRouter();
    const { theme } = useTheme();
    const styles = useMemo(() => createAppStyles(theme), [theme]);
    return (
        <Animated.View
            entering={FadeInUp.delay(600).duration(1000).springify()}
            style={{ width: '100%', alignItems: 'center' }}
        >
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.components.btn, {
                    paddingHorizontal: 40,
                    width: '100%',
                    backgroundColor: theme.colors.whiteOpacity,
                    borderRadius: 30,
                    height: 60,
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                    elevation: 8,
                    overflow: 'hidden',
                    position: 'relative',
                    alignItems: 'center',

                }]}
                onPress={() => router.push('/(auth)/login')}
            >
                <AntigravityBackground
                    colors={
                        theme.dark
                            ? ["#0606dfff", "#040427", "#040415ff", "#0606dfff", "#101064"]
                            : ["#0d0d0dff", "#010120ff", "#040415ff", "#010120ff", "#040415ff"]
                    }
                    blurIntensity={40}
                    containerWidth={340}
                    containerHeight={56}
                />
                <Text style={[styles.components.btnTxt, { fontSize: 18, fontWeight: '700' }]}>
                    Empezar ahora
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default ButtonWelcome