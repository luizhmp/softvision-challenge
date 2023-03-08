import styled, { css } from 'styled-components/native';

// Types
import { ProductCardContainerStyleInterface } from './types';

export const ProductCardContainer = styled.View`
  ${({ theme, index }: ProductCardContainerStyleInterface) => {
    const isEvenIndex = index % 2 === 0;

    return css`
      flex: 0.5;
      margin-right: ${isEvenIndex ? theme.metrics.doubleSpace : 0}px;
    `;
  }};
`;
