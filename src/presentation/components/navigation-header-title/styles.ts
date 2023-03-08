import styled, { css } from 'styled-components/native';

// Components
import { Heading } from '~/presentation/components/texts';

export const BiggerWhiteHeading = styled(Heading)`
  ${({ theme }) => {
    return css`
      font-size: 20px;
      color: ${theme.colors.white};
    `;
  }};
`;
