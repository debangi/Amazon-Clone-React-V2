import React from 'react';
import Product from '../Product/Product.component';
import { Banner, Container, Content } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
};

export default Home;
