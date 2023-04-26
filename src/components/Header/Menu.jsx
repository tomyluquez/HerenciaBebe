import { useSelector, useDispatch } from "react-redux";
import {
  MenuSt,
  UlMenu,
  Hamburger,
  IconCart,
  MenuLi,
} from "../../styles/Header/headerStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.textContent === "Productos") navigate("/productos");
    if (e.target.textContent === "Inicio") navigate("/");
    dispatch(closeMenues());
  };

  return (
    <MenuSt>
      <Hamburger onClick={() => dispatch(toggleMenues("hamburger"))} />
      <UlMenu menuOpen={menuOpen}>
        <MenuLi onClick={(e) => handleClick(e)}>Inicio</MenuLi>
        <MenuLi onClick={(e) => handleClick(e)}>Productos</MenuLi>
        <MenuLi>Ingresar</MenuLi>
      </UlMenu>
      <IconCart onClick={() => dispatch(toggleMenues("cart"))} />
      <Cart />
    </MenuSt>
  );
};

export default Menu;
