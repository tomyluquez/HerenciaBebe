import React from "react";
import {
  FormCupones,
  InputCupones,
} from "../../styles/CheckOut/checkoutStyles";
import useGetCupon from "../../Hooks/useGetCupon";
import { ButtonSeeMore } from "../../styles/Main/categories.Styles";

const Cupones = ({ cupon, setCupon }) => {
  const handleCupones = (e) => {
    e.preventDefault();
    const cuponIngresado = e.target[0].value;
    const descuento = useGetCupon(cuponIngresado);
    setCupon(descuento);
  };

  console.log(cupon);

  return (
    <>
      <FormCupones onSubmit={handleCupones}>
        <span>Tenes un cupon de descuento?</span>
        <InputCupones type="text" placeholder="Ingresa el cupon de descuento" />
        {cupon !== "no" ? (
          typeof cupon === "number" ? (
            <span style={{ color: "green" }}>
              Se agrego con exito el cupon de descuento
            </span>
          ) : (
            <span style={{ color: "red" }}>El cupon ingresado no existe</span>
          )
        ) : null}
        <ButtonSeeMore>Agregar</ButtonSeeMore>
      </FormCupones>
    </>
  );
};

export default Cupones;
