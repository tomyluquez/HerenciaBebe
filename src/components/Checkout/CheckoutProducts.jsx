import React, { useEffect, useState } from "react";
import useGetDescuentos from "../../Hooks/useGetDescuentos";
import {
  Alert,
  ButtonNext,
  DivButtons,
  DivContainerAlert,
  DivContainerCheckout,
  DivContainerDetails,
  DivProductsSelect,
} from "../../styles/CheckOut/checkoutStyles";
import FormaPagoCO from "./FormaPagoCO";
import Cupones from "./Cupones";
import CostoEnvioCO from "./CostoEnvioCO";
import ProductsSelectCO from "./ProductsSelectCO";
import FormaEntregaCO from "./FormaEntregaCO";
import Descuentos from "./Descuentos";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../styles/CheckOut/animationsSlider.css";
import ModalOrder from "./ModalOrder";
import generateNumOrder from "../../Services/generateNumOrder";
import { useToast } from "@chakra-ui/react";
import firebaseApp from "../../Firebase/config";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

const auth = getAuth(firebaseApp);

const CheckoutProducts = ({ products }) => {
  const [formaPago, setFormaPago] = useState(null);
  const [cupon, setCupon] = useState("no");
  const [entrega, setEntrega] = useState(null);
  const [costoEnvio, setCostoEnvio] = useState(null);
  const [descuentoEft, descuentoCupon, totalDescuentos, totalPagar] =
    useGetDescuentos(formaPago, cupon, products);
  const [sliderPosition, setSliderPosition] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(null);
  const toast = useToast();
  const {
    formasPago: { tarjeta },
  } = useSelector((state) => state.datosComercio);

  const handleNext = () => {
    if (sliderPosition === 2 && !formaPago) {
      return toast({
        title: "Error Forma de pago",
        description: "Por favor selecicona una forma de pago",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else if (sliderPosition === 3 && !entrega) {
      return toast({
        title: "Error Forma de entrega",
        description: "Por favor selecicona una forma de entrega",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    setSliderPosition(sliderPosition + 1);
  };

  const handleSubmit = () => {
    const user = auth.currentUser;
    const date = new Date();
    const numOrder = generateNumOrder();
    const pedidoFinal = {
      products,
      totalPagar,
      entrega,
      formaPago,
      costoEnvio,
      numOrder,
      estado: "pendiente",
      username: user.displayName,
      uid: user.uid,
      fecha: date.toLocaleDateString(),
      hora: date.toLocaleTimeString(),
    };
    setModalIsVisible(<ModalOrder pedidoFinal={pedidoFinal} user={user} />);
  };

  useEffect(() => {
    if (entrega === "retiro") {
      setCostoEnvio(false);
    }
  }, [entrega]);

  return (
    <DivContainerCheckout style={{ width: "100%" }}>
      <DivContainerAlert>
        <Alert>
          Al finalizar el proceso de compra, veras reflejado los descuentos
          correspondientes
        </Alert>
      </DivContainerAlert>
      <SwitchTransition>
        <CSSTransition
          key={sliderPosition}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <DivContainerCheckout style={{ margin: "0" }}>
            {sliderPosition === 1 && (
              <DivProductsSelect>
                <ProductsSelectCO products={products} formaPago={formaPago} />
              </DivProductsSelect>
            )}
            {sliderPosition === 2 && (
              <DivProductsSelect>
                <FormaPagoCO setFormaPago={setFormaPago} />
              </DivProductsSelect>
            )}
            {sliderPosition === 3 && (
              <DivProductsSelect>
                <FormaEntregaCO setEntrega={setEntrega} />
              </DivProductsSelect>
            )}
            {sliderPosition === 4 && (
              <DivProductsSelect>
                <Cupones cupon={cupon} setCupon={setCupon} />
              </DivProductsSelect>
            )}
            {sliderPosition === 5 && (
              <DivProductsSelect>
                <DivContainerDetails>
                  <CostoEnvioCO entrega={entrega} totalPagar={totalPagar} />
                  <Descuentos
                    descuentoEft={descuentoEft}
                    descuentoCupon={descuentoCupon}
                    totalDescuentos={totalDescuentos}
                  />
                  <span>Total a pagar: ${totalPagar ? totalPagar : "-"}</span>
                  {formaPago === "tarjeta" ? (
                    <span>
                      Podes abonar en {tarjeta} cuotas fijas de $
                      {Math.floor(totalPagar / tarjeta)}
                    </span>
                  ) : null}
                </DivContainerDetails>
              </DivProductsSelect>
            )}
          </DivContainerCheckout>
        </CSSTransition>
      </SwitchTransition>
      <DivButtons>
        {sliderPosition > 1 ? (
          <ButtonNext onClick={() => setSliderPosition(sliderPosition - 1)}>
            Atras
          </ButtonNext>
        ) : null}
        {sliderPosition === 5 ? (
          <ButtonNext onClick={handleSubmit}>Finalizar Compra</ButtonNext>
        ) : (
          <ButtonNext onClick={handleNext}>
            {sliderPosition === 4
              ? cupon !== "no"
                ? "Aplicar Cupon"
                : "No tengo cupon"
              : "Siguiente"}
          </ButtonNext>
        )}
      </DivButtons>
      {modalIsVisible}
    </DivContainerCheckout>
  );
};

export default CheckoutProducts;
