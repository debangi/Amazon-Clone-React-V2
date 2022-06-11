import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
export const HeaderOptionAddress = styled.div`
  display: flex;
  align-items: center;
  padding-left: 9px;
`;
export const OptionLineOne = styled.div``;
export const OptionLineTwo = styled.div`
  font-weight: 700;
`;
export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: #fff;

  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  outline: none;
  border: none;

  :focus {
    outline: none;
  }
`;
export const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderNavItems = styled.div`
  display: flex;
`;
export const HeaderOption = styled.div`
  padding: 10px 9px;
`;
export const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
`;
export const CartCount = styled.div`
  padding-left: 4px;
`;
