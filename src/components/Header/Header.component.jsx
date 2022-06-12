import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  CartCount,
  Container,
  HeaderLogo,
  HeaderNavItems,
  HeaderOption,
  HeaderOptionAddress,
  HeaderOptionCart,
  HeaderSearch,
  HeaderSearchIconContainer,
  HeaderSearchInput,
  OptionLineOne,
  OptionLineTwo,
} from './Header.styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = ({ cartItems }) => {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <Fragment>
      <Container>
        <HeaderLogo>
          <Link to='/'>
            <img src={'https://i.imgur.com/7I9Was5.png'} alt='logo' />
          </Link>
        </HeaderLogo>
        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Hello,</OptionLineOne>
            <OptionLineTwo>Select your address</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>
        <HeaderSearch>
          <HeaderSearchInput type='text' />
          <HeaderSearchIconContainer>
            <SearchIcon />
          </HeaderSearchIconContainer>
        </HeaderSearch>
        <HeaderNavItems>
          <HeaderOption>
            <OptionLineOne>Hello, Debangi</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </HeaderOption>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
          <HeaderOptionCart>
            <Link to='/cart'>
              <ShoppingCartIcon />
              <CartCount>{getCount()}</CartCount>
            </Link>
          </HeaderOptionCart>
        </HeaderNavItems>
      </Container>

      <Outlet />
    </Fragment>
  );
};

export default Header;
