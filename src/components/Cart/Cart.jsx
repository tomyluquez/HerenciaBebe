import { useDispatch, useSelector } from "react-redux";
import {
  CloseIcon,
  DivContainerCart,
  DivProdInCart,
} from "../../styles/Cart/cartStyles";
import { closeMenues } from "../../redux/opens";
import ProductInCart from "./ProductInCart";
import InfoCart from "./InfoCart";

const Cart = () => {
  const cartOpen = useSelector((state) => state.toggleMenues.cart);
  const productsCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  if (productsCart.length === 0) {
    return (
      <DivContainerCart cartOpen={cartOpen}>
        <CloseIcon onClick={() => dispatch(closeMenues())} />
        No has agregado ningun producto al carrito
      </DivContainerCart>
    );
  }

  return (
    <DivContainerCart cartOpen={cartOpen}>
      <CloseIcon onClick={() => dispatch(closeMenues())} />
      <DivProdInCart>
        {productsCart &&
          productsCart.map((prod) => {
            return <ProductInCart product={prod} />;
          })}
      </DivProdInCart>
      <InfoCart productsCart={productsCart} />
    </DivContainerCart>
  );
};

export default Cart;
