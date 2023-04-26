import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, DivContainerCart } from "../../styles/Cart/cartStyles";
import { closeMenues } from "../../redux/opens";

const Cart = () => {
  const cartOpen = useSelector((state) => state.toggleMenues.cart);
  const dispatch = useDispatch();

  return (
    <DivContainerCart cartOpen={cartOpen}>
      <CloseIcon onClick={() => dispatch(closeMenues())} />
      Este es el carrito de compras
    </DivContainerCart>
  );
};

export default Cart;
