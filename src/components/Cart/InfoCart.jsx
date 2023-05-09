import React from "react";
import ControlEnvios from "./ControlEnvios";
import useGetPrices from "../../Hooks/useGetPrices";
import {
  ButtonCompra,
  ButtonEndCompra,
  DivButtons,
  DivContainerDetailsCart,
  DivContainerEnvios,
  DivPrices,
} from "../../styles/Cart/cartStyles";
import { useDispatch } from "react-redux";
import { toggleMenues } from "../../redux/opens";
import { useNavigate } from "react-router";

const InfoCart = ({ productsCart }) => {
  const [totalPriceEft, totalPrice] = useGetPrices(productsCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const continueBuy = () => {
    dispatch(toggleMenues("cart"));
    navigate("/productos");
  };

  const goToChekout = () => {
    dispatch(toggleMenues("cart"));
    navigate("/checkout");
  };

  return (
    <DivContainerDetailsCart>
      <DivContainerEnvios>
        <ControlEnvios totalPriceEft={totalPriceEft} totalPrice={totalPrice} />
      </DivContainerEnvios>
      <DivPrices>
        <span>
          Total en Eft / Transferencia: <strong>${totalPriceEft}</strong>
        </span>
        <span>
          Total con tarjeta: <strong>${totalPrice}</strong>
        </span>
        <span>
          <strong>
            PAGANDO EN EFT TE AHORRAS: ${totalPrice - totalPriceEft}
          </strong>
        </span>
      </DivPrices>
      <DivButtons>
        <ButtonCompra onClick={continueBuy}>Seguir Comprando</ButtonCompra>
        <ButtonEndCompra onClick={goToChekout}>
          Finalizar Compra
        </ButtonEndCompra>
      </DivButtons>
    </DivContainerDetailsCart>
  );
};

export default InfoCart;
