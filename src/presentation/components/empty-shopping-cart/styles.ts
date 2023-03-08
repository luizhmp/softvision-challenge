import styled, { css } from 'styled-components/native';

import { Heading } from '~/presentation/components/texts';

export const EmptyShoppingCartContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }) => {
    return css`
      margin-top: ${theme.metrics.doubleSpace}px;
      padding-vertical: ${theme.metrics.space}px;
      padding-horizontal: ${theme.metrics.doubleSpace}px;
      border-radius: ${theme.metrics.circle}px;
      border-width: ${theme.metrics.borderWidth}px
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};
    `;
  }};
`;

export const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const WhiteHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
      font-weight: bold;
    `;
  }};
`;
