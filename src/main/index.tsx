import React from 'react';
import { registerRootComponent } from 'expo';
import { AppNavigator } from '~/presentation/navigation';

export default function Main() {
  return <AppNavigator />;
}

registerRootComponent(Main);
