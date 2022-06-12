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
import { doc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const CartItem = ({ id, item }) => {
  const deleteItem = (e) => {
    e.preventDefault();
    const itemDocRef = doc(db, 'cartItems', `${id}`);
    deleteDoc(itemDocRef);
  };

  let options = [];
  for (let i = 1; i < Math.max(item.quantity + 1, 20); i++) {
    options.push(<option value={i}> Qty: {i}</option>);
  }

  const changeQuantity = (newQuantity) => {
    const itemDocRef = doc(db, 'cartItems', `${id}`);
    getDoc(itemDocRef).then((doc) => {
      updateDoc(itemDocRef, { quantity: parseInt(newQuantity) });
    });
  };

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
              value={item.quantity}
              min='1'
              onChange={(e) => changeQuantity(e.target.value)}
            />
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>
            Delete
          </CartItemDeleteContainer>
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
