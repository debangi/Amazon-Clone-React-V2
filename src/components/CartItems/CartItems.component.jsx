import React from 'react';
import { Container, ItemsContainer, Title } from './CartItems.styles';
import CartItem from '../CartItem/CartItem.component';

const CartItems = () => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
