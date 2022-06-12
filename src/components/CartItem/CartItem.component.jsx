import React from 'react';
import {
  CartItemDeleteContainer,
  CartItemInfo,
  CartItemInfoBottom,
  CartItemInfoTop,
  CartItemPrice,
  CartItemQuantityContainer,
  Container,
  ImageContainer,
} from '../CartItem/CartItem.styles';

const CartItem = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          src='https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg'
          alt=''
        />
      </ImageContainer>
      <CartItemInfo>
        <CartItemInfoTop>
          <h2>New Apple iPad Pro</h2>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>5</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>
      <CartItemPrice>₹23434</CartItemPrice>
    </Container>
  );
};

export default CartItem;
