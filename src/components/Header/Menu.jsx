import { useSelector, useDispatch } from "react-redux";
import {
  MenuSt,
  UlMenu,
  Hamburger,
  IconCart,
  MenuLi,
  SpanCart,
} from "../../styles/Header/headerStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../redux/userSlices";
import firebaseApp from "../../Firebase/config";

const auth = getAuth(firebaseApp);

const Menu = ({ logginUser }) => {
  const navigate = useNavigate();
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.textContent === "Productos") navigate("/productos");
    if (e.target.textContent === "Inicio") navigate("/");
    dispatch(closeMenues());
  };

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
    setUser(null);
    dispatch(toggleMenues("hamburger"));
  };

  const handleLogin = () => {
    navigate("/login");
    dispatch(toggleMenues("hamburger"));
  };

  return (
    <MenuSt>
      <Hamburger onClick={() => dispatch(toggleMenues("hamburger"))} />
      <UlMenu menuOpen={menuOpen}>
        <MenuLi onClick={(e) => handleClick(e)}>Inicio</MenuLi>
        <MenuLi onClick={(e) => handleClick(e)}>Productos</MenuLi>
        {logginUser ? <MenuLi>Mis compras</MenuLi> : null}
        {logginUser ? (
          <MenuLi onClick={handleLogout}>Salir</MenuLi>
        ) : (
          <MenuLi onClick={handleLogin}>Ingresar</MenuLi>
        )}
      </UlMenu>
      <IconCart onClick={() => dispatch(toggleMenues("cart"))} />
      {totalProducts > 0 ? (
        <SpanCart
          logginUser={logginUser}
          onClick={() => dispatch(toggleMenues("cart"))}
        >
          {totalProducts}
        </SpanCart>
      ) : null}
      <Cart />
    </MenuSt>
  );
};

export default Menu;
