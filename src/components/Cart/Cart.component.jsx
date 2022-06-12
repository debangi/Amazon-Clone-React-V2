import React from 'react';
import CartItems from '../CartItems/CartItems.component';
import CartTotal from '../CartTotal/CartTotal.component';
import { Container } from './Cart.styles';

const Cart = ({ cartItems }) => {
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
};

export default Cart;
