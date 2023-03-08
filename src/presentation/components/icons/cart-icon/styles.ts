import styled, { css } from 'styled-components/native';

// Components
import { Heading } from '~/presentation/components/texts';

export const UserCheckoutProductsTotalQuantityContainer = styled.View`
  ${({ theme }) => {
    return css`
      z-index: 999;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: ${theme.metrics.circle}px;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.secondary};
    `;
  }};
`;

export const WhiteHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.black};
      font-weight: bold;
    `;
  }};
`;
