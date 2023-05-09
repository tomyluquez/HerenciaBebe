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
import useGetPromoPrice from "../../Hooks/useGetPromoPrice";

const CardProducts = ({ prod }) => {
  const [talleSelected, setTalleSelected] = useState(null);
  const stockProd = prod.talles[talleSelected];
  const promoPrice = useGetPromoPrice(prod.price, prod.descuento);

  return (
    <DivImg>
      <DivDescuento>{prod.descuento}%off efectivo</DivDescuento>
      <ImgDestacados src={prod.fotos[0]} alt="" />
      <NameProduct>{prod.name}</NameProduct>
      <DivPrices>
        <p>${promoPrice}</p>
        <p>${prod.price}</p>
      </DivPrices>
      <DivTalles>
        <span>Talle</span>
        <select
          id="talles"
          name="talle"
          onChange={(e) => setTalleSelected(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Seleccione un talle
          </option>
          {Object.keys(prod.talles).map((talle) => (
            <option key={talle} value={talle}>
              {talle}
            </option>
          ))}
        </select>
      </DivTalles>
      <AddToCart stock={stockProd} talleSelected={talleSelected} prod={prod} />
    </DivImg>
  );
};
CardProducts.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default CardProducts;
