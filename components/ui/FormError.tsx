import { useTheme } from '@/hooks/useTheme';
import { createAppStyles } from '@/theme/styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useEffect, useMemo } from 'react';
import { Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';

interface FormErrorProps {
    message: string;
    visible: boolean | string | undefined;
}

const FormError = ({ message, visible }: FormErrorProps) => {
    const { theme } = useTheme();
    const styles = useMemo(() => createAppStyles(theme), [theme]);

    const opacity = useSharedValue(0);
    const scale = useSharedValue(0.8);
    const translateY = useSharedValue(10);

    useEffect(() => {
        if (visible) {
            opacity.value = withTiming(1, { duration: 200 });
            scale.value = withSpring(1);
            translateY.value = withSpring(0);
        } else {
            opacity.value = withTiming(0, { duration: 0 });
            scale.value = withTiming(0.8, { duration: 800 });
            translateY.value = withTiming(10, { duration: 800 });
        }
    }, [visible]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { scale: scale.value },
                { translateY: translateY.value }
            ],
            display: opacity.value === 0 && visible === undefined ? 'none' : 'flex'
        };
    });

    if (!visible && opacity.value === 0) return null;

    return (
        <Animated.View style={[styles.formik.errorContainer, animatedStyle]}>
            <FontAwesome
                name="exclamation-circle"
                size={14}
                color={theme.colors.text}
            />
            <Text style={styles.formik.errorText}>{message}</Text>
        </Animated.View>
    );
};

export default FormError;
