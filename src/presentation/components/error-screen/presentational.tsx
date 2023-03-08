import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// Icons
import { AntDesign } from '@expo/vector-icons';

// Components
import { Heading } from '~/presentation/components';

// Styles
import {
  ErrorScreenContainer,
  IconContainer,
  StyledButton,
  StyledImage,
  WhiteHeading,
} from './styles';

// Types
import { ErrorScreenPresentationalInterface } from './types';
import { ImageSourcePropType } from 'react-native';

export function ErrorScreen({ errorMessage, onPressTryAgain }: ErrorScreenPresentationalInterface) {
  const errorImageSource = '../../../../assets/images/error-image.png';
  const { colors } = useContext(ThemeContext);

  return (
    <ErrorScreenContainer>
      <StyledImage source={require(errorImageSource) as ImageSourcePropType} />
      <Heading type="H1">{errorMessage}</Heading>
      <StyledButton onPress={onPressTryAgain}>
        <IconContainer>
          <AntDesign name="reload1" size={16} color={colors.white} />
        </IconContainer>
        <WhiteHeading type="H2">Tentar novamente</WhiteHeading>
      </StyledButton>
    </ErrorScreenContainer>
  );
}
