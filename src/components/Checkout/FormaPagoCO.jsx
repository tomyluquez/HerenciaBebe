import React from "react";
import { DivContainerSelect } from "../../styles/CheckOut/checkoutStyles";
import { LabelStyles } from "../../styles/Products/productsStyles";

const FormaPagoCO = ({ setFormaPago }) => {
  return (
    <>
      <DivContainerSelect>
        <h6>Selecciona la forma de pago</h6>
        <div>
          <input
            type="radio"
            name="setFormaPago"
            id="eft"
            value="efectivo"
            onChange={(e) => setFormaPago(e.target.value)}
          />
          <LabelStyles htmlFor="eft">Efectivo / Trasferencia</LabelStyles>
        </div>
        <div>
          <input
            type="radio"
            name="setFormaPago"
            id="tar"
            value="tarjeta"
            onChange={(e) => setFormaPago(e.target.value)}
          />
          <LabelStyles htmlFor="tar">Tarjeta de credito</LabelStyles>
        </div>
      </DivContainerSelect>
    </>
  );
};

export default FormaPagoCO;
