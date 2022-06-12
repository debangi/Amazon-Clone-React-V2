import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartItemInfoTop = styled.div`
  color: #007184;
  h2 {
    font-size: 18px;
  }
`;
export const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
export const CartItemQuantityContainer = styled.div``;
export const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
export const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
