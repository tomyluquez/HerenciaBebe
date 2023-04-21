import { useSelector } from "react-redux";
import { DivContainerCart } from "../../styles/Cart/cartStyles";

const Cart = () => {
  const cartOpen = useSelector((state) => state.toggleMenues.cart);
  return (
    <DivContainerCart cartOpen={cartOpen}>
      Este es el carrito de compras
    </DivContainerCart>
  );
};

export default Cart;
