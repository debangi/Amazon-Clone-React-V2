import React from 'react';
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

const Header = () => {
  return (
    <Container>
      <HeaderLogo>
        <img src={'https://i.imgur.com/7I9Was5.png'} alt='logo' />
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
          <ShoppingCartIcon />
          <CartCount>1</CartCount>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;
