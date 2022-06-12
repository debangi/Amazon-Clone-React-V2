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
// import firebase from 'firebase/compat/app';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Product = ({ id, title, maxPrice, offerPrice, rating, imageUrl }) => {
  const addToCart = async () => {
    console.log(id, title);
    const itemDocRef = doc(db, 'cartItems', `${id}`);
    // const itemSnapshot = await getDoc(itemDocRef);
    getDoc(itemDocRef).then((doc) => {
      console.log(doc);
      if (doc.data()) {
        console.log(doc.data());
        updateDoc(itemDocRef, { quantity: doc.data().quantity + 1 });
      } else {
        const payload = {
          name: title,
          imageUrl: imageUrl,
          maxPrice: maxPrice,
          offerPrice: offerPrice,
          quantity: 1,
        };
        setDoc(itemDocRef, payload);
      }
    });
  };

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
          .map((_, rating) => (
            <p key={rating}>⭐</p>
          ))}
      </Rating>
      <Image src={imageUrl} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;
