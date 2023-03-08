import styled, { css } from 'styled-components/native';

// Types
import { StyledTextStylePropsInterface } from './types';

export const StyledText = styled.Text`
  ${({ theme, type }: StyledTextStylePropsInterface) => {
    function getTextStyle() {
      switch (type) {
        case 'H1':
          return 'font-family: Montserrat-SemiBold; font-size: 14px';

        case 'H2':
          return 'font-family: Montserrat-Medium; font-size: 14px';

        case 'H3':
          return 'font-family: Montserrat-Regular; font-size: 12px';

        case 'H4':
          return 'font-family: Montserrat-Medium; font-size: 10px';
      }
    }

    return css`
      ${getTextStyle()}
      color: ${theme.colors.textColor};
    `;
  }}
`;
