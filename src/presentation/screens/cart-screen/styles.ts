import styled, { css } from 'styled-components/native';

export const CheckoutProductCardContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.metrics.doubleSpace}px;
    `;
  }};
`;
