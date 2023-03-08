import React from 'react';

// Components
import { Heading } from '~/presentation/components';

// Styles
import {
  ProductQuantityContainer,
  QuantityButtonContainer,
  StyledQuantityButton,
  WhiteHeading,
} from './styles';

// Types
import { QuantityButtonPresentationalInterface } from './types';

export function QuantityButton({
  productQuantity,
  onPressDecrease,
  onPressIncrease,
}: QuantityButtonPresentationalInterface) {
  return (
    <QuantityButtonContainer>
      <StyledQuantityButton onPress={onPressDecrease}>
        <WhiteHeading type="H1">-</WhiteHeading>
      </StyledQuantityButton>
      <ProductQuantityContainer>
        <Heading type="H1">{productQuantity}</Heading>
      </ProductQuantityContainer>
      <StyledQuantityButton onPress={onPressIncrease}>
        <WhiteHeading type="H1">+</WhiteHeading>
      </StyledQuantityButton>
    </QuantityButtonContainer>
  );
}
