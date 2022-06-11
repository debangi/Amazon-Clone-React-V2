import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  z-index: 10;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;

  display: flex;
  flex-direction: column;
`;
export const Title = styled.span``;
export const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
export const Rating = styled.div``;
export const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
export const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
`;
export const ActionSection = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
