import { Routes, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart.component';
import Header from './components/Header/Header.component';
import Home from './components/Home/Home.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
