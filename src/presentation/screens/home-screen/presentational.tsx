import React, { useState, useCallback, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';

// Components
import { ErrorScreen, ListFooter, ProductCard, SkeletonLoading } from '~/presentation/components';

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { metrics } = useContext(ThemeContext);
  const hasError = errorMessage !== '';
  const NUMBER_OF_FAKE_PRODUCTS = 6;
  const fakeProductsArray: undefined[] = Array.from({ length: NUMBER_OF_FAKE_PRODUCTS });

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage('');
    const remoteGetProducts = makeRemoteGetProducts();

    const response = await remoteGetProducts.execute();

    if (response) {
      setIsLoading(false);
      return setProducts(response);
    }
    setIsLoading(false);
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

  function renderFakeItem(undefinedValue: undefined, index: number) {
    return (
      <ProductCardContainer index={index}>
        <SkeletonLoading value={undefinedValue} />
      </ProductCardContainer>
    );
  }

  if (hasError) {
    return <ErrorScreen errorMessage={errorMessage} onPressTryAgain={getProducts} />;
  }

  if (isLoading) {
    return (
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        data={fakeProductsArray}
        contentContainerStyle={{ marginTop: metrics.headerSpace }}
        columnWrapperStyle={{
          marginHorizontal: metrics.screenHorizontalPadding,
          marginVertical: metrics.space,
        }}
        renderItem={({ item, index }) => renderFakeItem(item, index)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
      />
    );
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
