import { Animated } from 'react-native';

export const handlePressIn = (scaleValue) => {
  Animated.spring(scaleValue, {
    toValue: 0.9,
    useNativeDriver: true,
  }).start();
};

export const handlePressOut = (scaleValue) => {
  Animated.spring(scaleValue, {
    toValue: 1,
    useNativeDriver: true,
  }).start();
};