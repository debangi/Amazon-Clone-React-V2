import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart.component';
import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';
import styled from 'styled-components';
import { Fragment, useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebase-config';
import Login from './components/Login/Login.component';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'cartItems'), (snapshot) => {
      setCartItems(
        snapshot.docs.map((doc) => ({ id: doc.id, product: doc.data() }))
      );
    });
  }, []);

  return (
    <Fragment>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Routes>
            <Route
              path='/'
              element={<Header user={user} cartItems={cartItems} />}
            >
              <Route index element={<Home />} />
              <Route path='/cart' element={<Cart cartItems={cartItems} />} />
            </Route>
          </Routes>
        </Container>
      )}
    </Fragment>
  );
}

export default App;

const Container = styled.div``;
