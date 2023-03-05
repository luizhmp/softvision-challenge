import React from 'react';

// Styles
import { StyledText } from './styles';

// Types
import { HeadingPresentationalInterface } from './types';

export function Heading({ children, type }: HeadingPresentationalInterface) {
  return <StyledText type={type}>{children}</StyledText>;
}
