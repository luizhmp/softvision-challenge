import styled, { css } from 'styled-components/native';

// Components
import { Heading } from '~/presentation/components';

export const ProductQuantityContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-horizontal: ${theme.metrics.space}px;
    `;
  }};
`;

export const QuantityButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledQuantityButton = styled.TouchableOpacity`
  ${({ theme }) => {
    return css`
      padding-vertical: ${theme.metrics.halfSpace / 2}px;
      padding-horizontal: ${theme.metrics.doubleSpace * 1.5}px;
      border-radius: ${theme.metrics.circle}px;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.secondary};
    `;
  }};
`;

export const WhiteHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.white};
    `;
  }};
`;
