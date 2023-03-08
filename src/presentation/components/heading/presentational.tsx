import React from 'react';

// Styles
import { StyledText } from './styles';

// Types
import { HeadingPresentationalInterface } from './types';

export function Heading({ children, style, type }: HeadingPresentationalInterface) {
  return (
    <StyledText type={type} numberOfLines={1} style={style}>
      {children}
    </StyledText>
  );
}
