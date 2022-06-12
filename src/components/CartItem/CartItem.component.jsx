import React, { useState } from 'react';
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
  const [quantity, setQuantity] = useState(item.quantity);

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
          <CartItemQuantityContainer>
            <input
              type='number'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </CartItemQuantityContainer>
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
