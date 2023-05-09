import React, { useEffect, useState } from "react";
import useGetCostoEnvio from "../../Hooks/useGetCostoEnvio";
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
import { useSelector } from "react-redux";
import generateNumOrder from "../../Services/generateNumOrder";

const CheckoutProducts = ({ products }) => {
  const [formaPago, setFormaPago] = useState(null);
  const [cupon, setCupon] = useState("no");
  const [entrega, setEntrega] = useState(null);
  const [costoEnvio, setCostoEnvio] = useState(null);
  const [descuentoEft, descuentoCupon, totalDescuentos, totalPagar] =
    useGetDescuentos(formaPago, cupon, products);
  const [sliderPosition, setSliderPosition] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(null);
  const user = useSelector((state) => state.user);

  const handleSubmit = () => {
    if (!formaPago && !entrega) {
      return alert("Por favor selecciona la forma de pago y la entrega");
    } else if (!formaPago && entrega) {
      return alert("Por favor selecciona la forma de pago");
    } else if (formaPago && !entrega) {
      return alert("por favor selecciona una forma de entrega");
    } else {
      const date = new Date();
      const numOrder = generateNumOrder();
      const pedidoFinal = {
        products,
        totalPagar,
        entrega,
        formaPago,
        costoEnvio,
        numOrder,
        username: user.name,
        uid: user.uid,
        fecha: date.toLocaleDateString(),
        hora: date.toLocaleTimeString(),
      };
      setModalIsVisible(<ModalOrder pedidoFinal={pedidoFinal} />);
    }
  };

  useEffect(() => {
    if (entrega === "retiro") {
      setCostoEnvio(false);
    }
    if (entrega === "entrega") {
      const [costo] = useGetCostoEnvio(formaPago, products);
      setCostoEnvio(costo);
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
                  <CostoEnvioCO entrega={entrega} costoEnvio={costoEnvio} />
                  <Descuentos
                    descuentoEft={descuentoEft}
                    descuentoCupon={descuentoCupon}
                    totalDescuentos={totalDescuentos}
                  />
                  <span>Total a pagar: ${totalPagar ? totalPagar : "-"}</span>
                  {formaPago === "tarjeta" ? (
                    <span>
                      Podes abonar en 3 cuotas sin interes de $
                      {Math.floor(totalPagar / 3)}
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
          <ButtonNext onClick={() => setSliderPosition(sliderPosition + 1)}>
            Siguiente
          </ButtonNext>
        )}
      </DivButtons>
      {modalIsVisible}
    </DivContainerCheckout>
  );
};

export default CheckoutProducts;
