import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CheckoutProducts from "../components/Checkout/CheckoutProducts";
import { DivContainerGeneral } from "../styles/CheckOut/checkoutStyles";

const Checkout = () => {
  window.scrollTo(0, 0);

  const userActive = useSelector((state) => state.user.isLogin);
  const productsCart = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userActive) {
      navigate("/login");
    }
  }, [userActive]);

  return (
    <DivContainerGeneral>
      {productsCart.length > 0 ? (
        <CheckoutProducts products={productsCart} />
      ) : (
        <>
          <span>No hay productos agregados al carrito</span>
          <button onClick={() => navigate("/productos")}>
            Realizar compra
          </button>
        </>
      )}
    </DivContainerGeneral>
  );
};

export default Checkout;
