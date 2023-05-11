import React from "react";
import {
  DivContainerCuantity,
  DivImg,
  ImgDestacados,
  NameProduct,
} from "../../styles/Main/destacados";

const ProdSelected = ({ prod }) => {
  return (
    <DivImg>
      <ImgDestacados src={prod.foto} alt="" loading="lazy" />
      <DivContainerCuantity style={{ flexDirection: "row" }}>
        <NameProduct style={{ padding: "0" }}>{prod.name}</NameProduct>
      </DivContainerCuantity>
      <DivContainerCuantity>
        <p>Cantidad: {prod.cantidad}</p>
        <p>Talle: {prod.talle}</p>
      </DivContainerCuantity>
    </DivImg>
  );
};

export default ProdSelected;
