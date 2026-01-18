import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export const BottomSheetSlideUp = ({ styles, theme, children }: any) => {
  const insets = useSafeAreaInsets();
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 550,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(1, { duration: 350 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <>
      <Animated.View
        style={[
          styles.whiteContainer,
          {
            backgroundColor: theme.colors.background,
            paddingBottom: Math.max(insets.bottom, 16),
          },
          animatedStyle,
        ]}
      >
        <Svg
          width={width}
          height={130}
          viewBox={`0 0 ${width} 100`}
          style={{ position: 'absolute', top: -129, zIndex: 1 }}
        >
          <Path
            d={`M0 70 C ${width * 0.25} 20, ${width * 0.75} 20, ${width} 70 L ${width} 100 L 0 100 Z`}
            fill={theme.colors.background}
          />
        </Svg>

        {children}
      </Animated.View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: insets.bottom,
          backgroundColor: theme.colors.background,
        }}
      />
    </>
  );
};
