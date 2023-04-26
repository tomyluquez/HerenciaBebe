import { useState } from "react";
import {
  DivDescuento,
  DivImg,
  DivPrices,
  DivTalles,
  ImgDestacados,
  NameProduct,
} from "../../styles/Main/destacados";
import AddToCart from "../AddToCart";
import PropTypes from "prop-types";

const CardProducts = ({ prod }) => {
  const [talleSelected, setTalleSelected] = useState(null);
  const stockProd = prod.talles[talleSelected];

  return (
    <DivImg>
      <DivDescuento>40%off</DivDescuento>
      <ImgDestacados src={prod.fotos[0]} alt="" />
      <NameProduct>{prod.name}</NameProduct>
      <DivPrices>
        <p>${prod.promoPrice}</p>
        <p>${prod.price}</p>
      </DivPrices>
      <DivTalles>
        <label htmlFor="talles">Talle</label>
        <select
          id="talles"
          name="talle"
          onChange={(e) => setTalleSelected(e.target.value)}
        >
          <option value="" disabled selected>
            Seleccione un talle
          </option>
          {Object.keys(prod.talles).map((talle) => (
            <option key={talle} value={talle}>
              {talle}
            </option>
          ))}
        </select>
      </DivTalles>
      <AddToCart stock={stockProd} />
    </DivImg>
  );
};
CardProducts.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default CardProducts;
