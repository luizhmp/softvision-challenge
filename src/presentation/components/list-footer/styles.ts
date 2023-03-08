import styled, { css } from 'styled-components/native';

export const Footer = styled.View`
  ${({ theme }) => {
    return css`
      height: ${theme.metrics.footerHeight}px;
    `;
  }};
`;
