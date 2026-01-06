import { BlurView } from 'expo-blur';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

const BlurContainer = ({ children }: PropsWithChildren) => {
    const { theme } = useTheme();

    return (
        <View style={styles.outerContainer}>
            <BlurView intensity={40} tint={theme.dark ? 'dark' : 'light'} style={styles.content}>
                {children}
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        margin: 20,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.14)',
    },
    content: {
        padding: 24,
        gap: 16,
    }
});

export default BlurContainer;
