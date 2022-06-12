import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  z-index: 10;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 600px;

  display: flex;
  flex-direction: column;
`;
export const Title = styled.span``;
export const PriceContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const MaxPrice = styled.span`
  text-decoration: line-through;
  font-weight: 500;
  margin-top: 3px;
`;
export const OfferPrice = styled.span`
  font-weight: bolder;
  margin-top: 3px;
  color: #ec1a48;
`;
export const Rating = styled.div`
  display: flex;
`;
export const Image = styled.img`
  max-height: 400px;
  max-width: 100%;
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
