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
import { removeFilters } from "../../redux/productsSlice";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const auth = getAuth(firebaseApp);

const Menu = ({ user }) => {
  const navigate = useNavigate();
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const totalProducts = useSelector((state) => state.cart.totalProducts);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (totalProducts > 0) {
      toast({
        title: "Productos en el carrito",
        description:
          "Tienes productos en el carrito, por favor termina la compra",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  }, []);

  const handleClick = (e) => {
    if (e.target.textContent === "Productos") {
      dispatch(removeFilters());
      navigate("/productos");
    }
    if (e.target.textContent === "Inicio") navigate("/");
    dispatch(closeMenues());

    if (
      e.target.textContent === "Mis Compras" ||
      e.target.textContent === "Mis Ventas"
    ) {
      navigate(`/profile/${user.name}/misCompras`);
      dispatch(closeMenues());
    }
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
        {user.isLogin ? (
          <MenuLi onClick={(e) => handleClick(e)}>
            Mis{" "}
            {user.email.includes("luquez1431") ||
            user.email.includes("celinamur18")
              ? "Ventas"
              : "Compras"}
          </MenuLi>
        ) : null}
        {user.isLogin ? (
          <MenuLi onClick={handleLogout}>Salir</MenuLi>
        ) : (
          <MenuLi onClick={handleLogin}>Ingresar</MenuLi>
        )}
      </UlMenu>
      <IconCart onClick={() => dispatch(toggleMenues("cart"))} />
      {totalProducts > 0 ? (
        <>
          <SpanCart
            logginUser={user.isLogin}
            onClick={() => dispatch(toggleMenues("cart"))}
          >
            {totalProducts}
          </SpanCart>
        </>
      ) : null}
      <Cart />
    </MenuSt>
  );
};

export default Menu;
