import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
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
  align-items: center;
`;
export const CartItemQuantityContainer = styled.div`
  input {
    width: 30px;
    border-radius: 7px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(15, 17, 17, 0.15);
    :focus {
      outline: none;
    }
  }
`;
export const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
export const CartItemPriceContainer = styled.div``;
export const CartItemMaxPrice = styled.div`
  text-decoration: line-through;
  font-size: 18px;
`;
export const CartItemOfferPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: red;
`;
