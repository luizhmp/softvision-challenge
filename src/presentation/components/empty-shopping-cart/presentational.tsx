import React from 'react';
import { routes } from '~/presentation/navigation/routes';
import { useNavigation } from '@react-navigation/native';

// Components
import { Heading } from '~/presentation/components/texts';

// Styles
import { EmptyShoppingCartContainer, StyledButton, StyledImage, WhiteHeading } from './styles';

// Types
import { StackNavigation } from '~/presentation/navigation/navigators/types';

export function EmptyShoppingCart() {
  const navigation = useNavigation<StackNavigation>();
  const emptyShoppingCartSource = '../../../../assets/images/empty-shopping-cart.png';

  function goToHomeScreen() {
    navigation.navigate(routes.HomeScreen);
  }
  return (
    <EmptyShoppingCartContainer>
      <StyledImage source={require(emptyShoppingCartSource)} alt="Carrinho vazio" />
      <Heading type="H1">Seu carrinho está vazio.</Heading>
      <StyledButton onPress={goToHomeScreen}>
        <WhiteHeading type="H2">Compre agora</WhiteHeading>
      </StyledButton>
    </EmptyShoppingCartContainer>
  );
}
