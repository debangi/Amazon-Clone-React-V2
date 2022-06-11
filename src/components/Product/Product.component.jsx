import React from 'react';
import {
  Container,
  Title,
  Price,
  Rating,
  Image,
  AddToCartButton,
  ActionSection,
} from './Product.styles';

const Product = () => {
  return (
    <Container>
      <Title>Ipad pro</Title>
      <Price>₹324</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src='https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg' />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;
