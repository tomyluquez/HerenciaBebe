import React from "react";
import { DivContainerProd } from "../../styles/CheckOut/checkoutStyles";

const ProductsSelectCO = ({ products, formaPago }) => {
  return (
    <>
      <h4>PRODUCTOS SELECCIONADOS</h4>
      {products.map((product) => {
        return (
          <DivContainerProd>
            <span>{product.cantidad}X</span>
            <span>{product.name}</span>
            <span>{product.talle}</span>
            <span>
              $
              {formaPago === "efectivo"
                ? Math.floor(
                    product.price - (product.price * product.descuento) / 100
                  )
                : product.price}
            </span>
          </DivContainerProd>
        );
      })}
    </>
  );
};

export default ProductsSelectCO;
