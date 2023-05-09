import React from "react";
import { useSelector } from "react-redux";
import {
  DivContainerInputEft,
  DivContainerInputTar,
  DivEnvioInd,
} from "../../styles/Cart/cartStyles";
import { GiPartyPopper } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const ControlEnvios = ({ totalPriceEft, totalPrice }) => {
  const envioGratis = useSelector((state) => state.datosComercio.enviosGratis);
  const porcentajeEft = Math.floor((totalPriceEft * 100) / envioGratis);
  const porcentajeTar = Math.floor((totalPrice * 100) / envioGratis);

  return (
    <>
      <DivEnvioInd>
        <span>Si abonas en Efectivo / Transferencia</span>
        <DivContainerInputEft porcentaje={porcentajeEft}>
          <BsTruck />
          <input
            type="range"
            name="controlEnvios"
            min="0"
            max={envioGratis}
            value={totalPriceEft}
          />
        </DivContainerInputEft>
        {totalPriceEft >= envioGratis ? (
          <span>
            <strong>
              YA TENES ENVIO GRATIS ! <GiPartyPopper />
            </strong>
          </span>
        ) : (
          <span>
            Te faltan <strong>${envioGratis - totalPriceEft}</strong> para tener
            envio gratis
          </span>
        )}
      </DivEnvioInd>
      <DivEnvioInd>
        <span>Si abonas con Tarjeta de Debito / Credito</span>
        <DivContainerInputTar porcentaje={porcentajeTar}>
          <BsTruck />
          <input
            type="range"
            name="controlEnvios"
            min="0"
            max={envioGratis}
            value={totalPrice}
          />
        </DivContainerInputTar>
        {totalPrice >= envioGratis ? (
          <span>
            <strong>
              YA TENES ENVIO GRATIS ! <GiPartyPopper />
            </strong>
          </span>
        ) : (
          <span>
            Te faltan <strong>${envioGratis - totalPrice}</strong> para tener
            envio gratis
          </span>
        )}
      </DivEnvioInd>
    </>
  );
};

export default ControlEnvios;
