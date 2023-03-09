import styled, { css } from 'styled-components/native';

// Components
import { Heading } from '~/presentation/components/texts';

export const CheckoutProductCardContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.metrics.doubleSpace}px;
    `;
  }};
`;

export const SubtotalContainer = styled.View`
  ${({ theme }) => {
    return css`
      border-top-radius: ${theme.metrics.borderRadius}px;
      border-top-width: ${theme.metrics.borderWidth}px;
      border-top-color: ${theme.colors.gray};
      padding-horizontal: ${theme.metrics.screenHorizontalPadding}px;
      padding-vertical: ${theme.metrics.space}px;
      background-color: ${theme.colors.primary}
      align-items: center;;
      flex-direction: row;
      justify-content: space-between;
    `;
  }};
`;

export const WhiteHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-weight: bold;
    `;
  }};
`;
