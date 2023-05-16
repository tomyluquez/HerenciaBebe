import React from "react";

const CostoEnvioCO = ({ entrega, totalPagar }) => {
  return (
    <p>
      Costo de Envio:
      {entrega ? (
        entrega === "entrega" && totalPagar < 10000 ? (
          <span>
            Te informaremos el costo de envio al procesar la compra segun tu
            zona
          </span>
        ) : (
          <span> no tiene costo de envio</span>
        )
      ) : null}
    </p>
  );
};

export default CostoEnvioCO;
