import React from 'react';
import {
  Container,
  Title,
  OfferPrice,
  Rating,
  Image,
  AddToCartButton,
  ActionSection,
  PriceContainer,
  MaxPrice,
} from './Product.styles';

const Product = ({ title, maxPrice, offerPrice, rating, imageUrl }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PriceContainer>
        <MaxPrice>₹{maxPrice}</MaxPrice>
        <OfferPrice>₹{offerPrice}</OfferPrice>
      </PriceContainer>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>
      <Image src={imageUrl} />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;
