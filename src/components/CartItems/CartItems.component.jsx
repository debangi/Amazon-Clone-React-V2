import React from 'react';
import { Container, ItemsContainer, Title } from './CartItems.styles';
import CartItem from '../CartItem/CartItem.component';

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem key={item.id} id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default CartItems;
