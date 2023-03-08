import styled, { css } from 'styled-components/native';

export const CheckoutProductCardContainer = styled.View`
  ${({ theme }) => {
    return css`
      border-radius: ${theme.metrics.borderRadius}px;
      padding: ${theme.metrics.space}px;
      background-color: ${theme.colors.white};
      elevation: 3;
      shadow-color: ${theme.colors.black};
      shadow-radius: ${theme.metrics.borderRadius}px;
      shadow-opacity: ${theme.metrics.shadowOpacity};
      flex-direction: row;
    `;
  }};
`;

export const ProductBottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductContentContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.metrics.halfSpace}px;
      justify-content: space-between;
      flex: 1;
    `;
  }};
`;

export const PriceAndIconContainer = styled(ProductContentContainer)`
  flex: 0.5;
  align-items: center;
  flex-direction: row;
`;

export const StyledImage = styled.Image`
  width: 80px;
  height: 80px;
`;
