import React from 'react';

// Styles
import { BiggerWhiteHeading } from './styles';

// Types
import { NavigationHeaderTitlePresentationalInterface } from './types';

export function NavigationHeaderTitle({ title }: NavigationHeaderTitlePresentationalInterface) {
  return <BiggerWhiteHeading type="H1">{title}</BiggerWhiteHeading>;
}
