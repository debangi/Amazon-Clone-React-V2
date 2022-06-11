import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
export const Banner = styled.div`
  background-image: url('https://i.imgur.com/SYHeuYM.jpg');
  min-height: 600px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
export const Content = styled.div`
  background: #fff;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
`;
