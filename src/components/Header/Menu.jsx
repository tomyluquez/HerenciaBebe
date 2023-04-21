import { useSelector, useDispatch } from "react-redux";
import {
  MenuSt,
  UlMenu,
  Hamburger,
  IconCart,
  MenuLi,
} from "../../styles/Header/headerStyles";
import { toggleCart, toggleHamburger } from "../../redux/opens";
import Cart from "../Cart/Cart";

const Menu = () => {
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const dispatch = useDispatch();

  return (
    <MenuSt>
      <Hamburger onClick={() => dispatch(toggleHamburger())} />
      <UlMenu menuOpen={menuOpen}>
        <MenuLi>Inicio</MenuLi>
        <MenuLi>Productos</MenuLi>
        <MenuLi>Ingresar</MenuLi>
      </UlMenu>
      <IconCart onClick={() => dispatch(toggleCart())} />
      <Cart />
    </MenuSt>
  );
};

export default Menu;
