import React from "react";
import ProdSelected from "./ProdSelected";
import Slider from "react-slick";
import { settingsCheckout } from "../../Data/settingsCarousels";

const ProductsSelectCO = ({ products, formaPago }) => {
  return (
    <>
      <h4 style={{ marginTop: "0", color: "white" }}>
        PRODUCTOS SELECCIONADOS
      </h4>
      <Slider {...settingsCheckout}>
        {products.map((prod) => (
          <ProdSelected key={prod.sku} prod={prod} />
        ))}
      </Slider>
    </>
  );
};

export default ProductsSelectCO;
