import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart.component';
import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'cartItems'), (snapshot) => {
      setCartItems(
        snapshot.docs.map((doc) => ({ id: doc.id, product: doc.data() }))
      );
    });
  }, []);

  console.log(cartItems);
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div``;
