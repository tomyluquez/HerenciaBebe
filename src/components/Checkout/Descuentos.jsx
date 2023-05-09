import React from "react";
import { DivDescuentos } from "../../styles/CheckOut/checkoutStyles";

const Descuentos = ({ descuentoEft, descuentoCupon, totalDescuentos }) => {
  return (
    <>
      <DivDescuentos>
        <h6>Descuentos</h6>
        <span>Por pago en Eft: ${descuentoEft}</span>
        <span>
          Por cupon de Descuento: ${descuentoCupon ? descuentoCupon : 0}
        </span>
        <span>
          Total de Descuentos: ${totalDescuentos ? totalDescuentos : 0}
        </span>
      </DivDescuentos>
    </>
  );
};

export default Descuentos;
