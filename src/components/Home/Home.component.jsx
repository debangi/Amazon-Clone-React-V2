import React, { useEffect, useState } from 'react';
import Product from '../Product/Product.component';
import { Banner, Container, Content } from './Home.styles';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'products'), (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, product: doc.data() }))
      );
    });
  }, []);

  console.log(products);
  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map(({ id, product }) => (
          <Product
            key={id}
            title={product.name}
            maxPrice={product.maxPrice}
            offerPrice={product.offerPrice}
            rating={product.rating}
            imageUrl={product.imageUrl}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
