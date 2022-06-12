import React from 'react';
import CartItems from '../CartItems/CartItems.component';
import CartTotal from '../CartTotal/CartTotal.component';
import { Container } from './Cart.styles';

const Cart = () => {
  return (
    <Container>
      <CartItems />
      <CartTotal />
    </Container>
  );
};

export default Cart;
