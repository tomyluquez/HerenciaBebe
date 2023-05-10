import React, { useEffect, useState } from "react";
import {
  ModalOrderFinal,
  CheckOk,
  PModal,
  CheckError,
  ButtonLogginModal,
  DivContainerButtonsCO,
  ModalOrderOK,
} from "../../styles/CheckOut/checkoutStyles";
import { Spinner } from "@chakra-ui/react";
import { ShadowOverlay as ShadowGral } from "../../styles/generalStyles";
import setOrders from "../../Services/setOrders";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlices";
import { useNavigate } from "react-router";

const ModalOrder = ({ pedidoFinal }) => {
  const [request, setRequest] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function submitOrder() {
      const result = await setOrders(pedidoFinal);
      setRequest(result);
    }
    submitOrder();
  }, []);

  const pedidoOk = () => {
    dispatch(resetCart());
    const phoneNumber = "+543512118497";
    const message = `Hola, soy ${
      pedidoFinal.username
    }, acabo de hacer un pedido por la pagina, el numero de orden del pedido es ${
      pedidoFinal.numOrder
    }, voy a pagarlo con ${pedidoFinal.formaPago} y ${
      pedidoFinal.entrega === "entrega"
        ? "necesito que me lo envien"
        : "lo retiro personalmente"
    }`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    navigate("/");
  };

  const pedidoError = () => {
    navigate("/checkout");
  };

  if (request === "creado") {
    return (
      <>
        <ModalOrderFinal request={request}>
          <CheckOk />
          <div style={{ textAlign: "center" }}>
            <PModal> Muchas gracias por tu compra !</PModal>
            <span style={{ color: "grey" }}>
              por favor comunicate con nosotros para coordinar la entrega y el
              pago.
            </span>
          </div>
          <DivContainerButtonsCO>
            <ButtonLogginModal onClick={pedidoOk}>
              COMUNICARME CON EL LOCAL
            </ButtonLogginModal>
          </DivContainerButtonsCO>
        </ModalOrderFinal>
        <ShadowGral />
      </>
    );
  }

  if (request === "error") {
    return (
      <ModalOrderFinal>
        <CheckError />
        <div style={{ textAlign: "center" }}>
          <PModal>PEDIDO CON ERROR, PROBA NUEVAMENTE</PModal>
          <ButtonLogginModal onClick={pedidoError}>CERRAR</ButtonLogginModal>
        </div>
      </ModalOrderFinal>
    );
  }

  return (
    <>
      <ModalOrderFinal>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#bdad9b"
          size="xl"
        />
        <p>Estamos procesando tu pedido</p>
      </ModalOrderFinal>
      <ShadowGral />
    </>
  );
};

export default ModalOrder;
