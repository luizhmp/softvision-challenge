import React from 'react';

// Styles
import { BiggerHeading } from './styles';

// Types
import { NavigationHeaderTitlePresentationalInterface } from './types';

export function NavigationHeaderTitle({ title }: NavigationHeaderTitlePresentationalInterface) {
  return <BiggerHeading type="H1">{title}</BiggerHeading>;
}
