import React from 'react';
import { CheckoutButton, Container, Subtotal } from './CartTotal.styles';
import NumberFormat from 'react-number-format';

const CartTotal = ({ getTotalPrice, getCount }) => {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getCount()} items):
        <NumberFormat
          value={getTotalPrice()}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₹'}
        />
      </Subtotal>
      <CheckoutButton>Proceed to checkout</CheckoutButton>
    </Container>
  );
};

export default CartTotal;
