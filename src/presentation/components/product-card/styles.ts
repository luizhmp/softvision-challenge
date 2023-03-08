import styled, { css } from 'styled-components/native';

// Components
import { Heading } from '~/presentation/components/texts';

// Types
import { TitleWrapperStyleInterface } from './types';

export const ProductContainer = styled.View`
  ${({ theme }) => {
    return css`
      padding: ${theme.metrics.space}px;
      border-radius: ${theme.metrics.borderRadius}px;
      elevation: 3;
      shadow-color: ${theme.colors.black};
      shadow-radius: ${theme.metrics.borderRadius}px;
      shadow-opacity: ${theme.metrics.shadowOpacity};
      justify-content: center;
      overflow: hidden;
      background-color: ${theme.colors.white};
    `;
  }};
`;

export const QuantityButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }) => {
    return css`
      padding-vertical: ${theme.metrics.halfSpace}px;
      padding-horizontal: ${theme.metrics.doubleSpace}px;
      border-radius: ${theme.metrics.circle}px;
      justify-content: center;
      align-items: center;
      align-self: center;
      background-color: ${theme.colors.primary};
    `;
  }};
`;

export const QuantityButton = styled(StyledButton)`
  ${({ theme }) => {
    return css`
      padding-vertical: ${theme.metrics.halfSpace / 2}px;
      padding-horizontal: ${theme.metrics.doubleSpace * 1.5}px;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.secondary};
    `;
  }};
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const TitleAndPriceContainer = styled.View`
  ${({ theme }) => {
    return css`
      margin-vertical: ${theme.metrics.space}px;
      flex-direction: row;
      justify-content: space-between;
    `;
  }};
`;

export const TitleWrapper = styled.View`
  ${({ title }: TitleWrapperStyleInterface) => {
    const LIMIT_CHARS_TO_TITLE = 16;
    const isTitleTooBig = title.length >= LIMIT_CHARS_TO_TITLE;

    return css`
      flex: ${isTitleTooBig ? 0.7 : 1};
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

export const BiggerHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.primary};
      font-size: 20px;
    `;
  }};
`;
