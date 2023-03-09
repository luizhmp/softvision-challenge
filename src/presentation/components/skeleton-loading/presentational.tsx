import React, { useState, useRef, useEffect } from 'react';

// Components
import { Animated, LayoutChangeEvent } from 'react-native';

// Styles
import { AnimatedView, SkeletonLoadingContainer } from './styles';

// Types
import { SkeletonLadingPresentationalInterface } from './types';

export function SkeletonLoading({ children, value }: SkeletonLadingPresentationalInterface) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const translateX = useRef(new Animated.Value(-200)).current;

  function getWidth(event: LayoutChangeEvent) {
    const { width } = event.nativeEvent.layout;

    return setContainerWidth(width);
  }

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: containerWidth,
        duration: 750,
        useNativeDriver: true,
      }),
    ).start();
  }, [containerWidth, translateX]);

  if (value) {
    return null;
  }

  return (
    <SkeletonLoadingContainer onLayout={getWidth}>
      <AnimatedView style={[{ transform: [{ translateX }] }]} />
      {children}
    </SkeletonLoadingContainer>
  );
}
