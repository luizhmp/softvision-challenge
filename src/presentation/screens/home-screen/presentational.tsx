import React, { useState, useCallback, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';

// Components
import { ErrorScreen, ListFooter, ProductCard } from '~/presentation/components';

// Errors
import { UnexpectedError } from '~/domain';

// Requests
import { makeRemoteGetProducts } from '~/main/factories';

// Styles
import { ProductCardContainer } from './styles';
import { ThemeContext } from 'styled-components';

// Types
import { ProductModel } from '~/domain/models';

export function HomeScreen() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { metrics } = useContext(ThemeContext);

  const isLoading = products === undefined;
  const hasError = errorMessage !== '';

  const getProducts = useCallback(async () => {
    setErrorMessage('');
    const remoteGetProducts = makeRemoteGetProducts();

    const response = await remoteGetProducts.execute();

    if (response) {
      return setProducts(response);
    }
    const error = new UnexpectedError();
    return setErrorMessage(error.message);
  }, []);

  useEffect(() => {
    void getProducts();
  }, [getProducts]);

  function renderFooter() {
    return <ListFooter />;
  }

  function renderItem(product: ProductModel, index: number) {
    return (
      <ProductCardContainer index={index}>
        <ProductCard product={product} />
      </ProductCardContainer>
    );
  }

  if (isLoading) {
    return null;
  }

  if (hasError) {
    return <ErrorScreen errorMessage={errorMessage} onPressTryAgain={getProducts} />;
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      data={products}
      contentContainerStyle={{ marginTop: metrics.headerSpace }}
      columnWrapperStyle={{
        marginHorizontal: metrics.screenHorizontalPadding,
        marginVertical: metrics.space,
      }}
      renderItem={({ item, index }) => renderItem(item, index)}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter}
    />
  );
}
