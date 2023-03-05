import { DefaultTheme } from 'styled-components';

export interface HeadingPresentationalInterface {
  children: string;
  type: 'H1' | 'H2' | 'H3' | 'H4';
}

export interface StyledTextStylePropsInterface extends HeadingPresentationalInterface {
  theme: DefaultTheme;
}
