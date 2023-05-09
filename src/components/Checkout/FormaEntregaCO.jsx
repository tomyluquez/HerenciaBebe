import React from "react";
import { DivContainerSelect } from "../../styles/CheckOut/checkoutStyles";
import { LabelStyles } from "../../styles/Products/productsStyles";

const FormaEntregaCO = ({ setEntrega }) => {
  return (
    <>
      <DivContainerSelect>
        <h6>Selecciona la forma de entrega</h6>
        <div>
          <input
            type="radio"
            name="setEntrega"
            id="retiro"
            value="retiro"
            onChange={(e) => setEntrega(e.target.value)}
          />
          <LabelStyles htmlFor="retiro">Lo retiro personalmente</LabelStyles>
        </div>
        <div>
          <input
            type="radio"
            name="setEntrega"
            id="entrega"
            value="entrega"
            onChange={(e) => setEntrega(e.target.value)}
          />
          <LabelStyles htmlFor="entrega">
            Necesito que me lo entreguen
          </LabelStyles>
        </div>
      </DivContainerSelect>
    </>
  );
};

export default FormaEntregaCO;
