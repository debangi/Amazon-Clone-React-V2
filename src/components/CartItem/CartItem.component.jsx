import React from 'react';
import {
  CartItemDeleteContainer,
  CartItemInfo,
  CartItemInfoBottom,
  CartItemInfoTop,
  CartItemMaxPrice,
  CartItemOfferPrice,
  CartItemPriceContainer,
  CartItemQuantityContainer,
  Container,
  ImageContainer,
} from '../CartItem/CartItem.styles';

const CartItem = ({ id, item }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>{item.name}</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>{item.quantity}</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPriceContainer>
        <CartItemMaxPrice>₹{item.maxPrice}</CartItemMaxPrice>
        <CartItemOfferPrice>₹{item.offerPrice}</CartItemOfferPrice>
      </CartItemPriceContainer>
    </Container>
  );
};

export default CartItem;
