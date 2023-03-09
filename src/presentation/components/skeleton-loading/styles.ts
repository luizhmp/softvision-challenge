import styled, { css } from 'styled-components/native';

// Components
import { Animated } from 'react-native';

export const AnimatedView = styled(Animated.View)`
  ${({ theme }) => {
    return css`
      border-radius: ${theme.metrics.borderRadius}px;
      width: 40%;
      height: 100%;
      opacity: 0.3;
      background-color: ${theme.colors.white};
      position: relative;
      overflow: hidden;
    `;
  }};
`;

export const SkeletonLoadingContainer = styled.View`
  ${({ theme }) => {
    return css`
      flex: 1;
      height: 200px;
      opacity: 0.5;
      border-radius: ${theme.metrics.borderRadius}px;
      background-color: ${theme.colors.gray};
    `;
  }};
`;
