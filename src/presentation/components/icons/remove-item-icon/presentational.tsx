import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { EvilIcons } from '@expo/vector-icons';

// Types
import { RemoveItemIconPresentationalInterface } from './types';

export function RemoveItemIcon({ onPressIcon }: RemoveItemIconPresentationalInterface) {
  const { colors } = useContext(ThemeContext);

  return (
    <EvilIcons.Button
      name="trash"
      size={24}
      color="black"
      backgroundColor={colors.white}
      onPress={onPressIcon}
    />
  );
}
