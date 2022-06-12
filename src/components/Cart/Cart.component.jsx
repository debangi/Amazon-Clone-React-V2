import CartItems from '../CartItems/CartItems.component';
import CartTotal from '../CartTotal/CartTotal.component';
import { Container } from './Cart.styles';

const Cart = ({ cartItems }) => {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.offerPrice * item.product.quantity;
    });
    return total;
  };
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  };

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
    </Container>
  );
};

export default Cart;
