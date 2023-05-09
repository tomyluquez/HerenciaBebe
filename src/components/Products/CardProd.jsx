import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import {
  DivContainerCuotas,
  DivContainerDetailsProd,
  DivContainerImg,
  DivContainerName,
  DivContainerProd,
} from "../../styles/Products/productsStyles";
import { useNavigate } from "react-router";
import { DivDescuento } from "../../styles/Main/destacados";

const CardProd = ({ prod }) => {
  const navigate = useNavigate();
  const {
    formasPago: { tarjeta },
  } = useSelector((state) => state.datosComercio);

  return (
    <DivContainerProd onClick={() => navigate(`/productos/${prod.sku}`)}>
      <DivContainerImg>
        {prod.promo && (
          <DivDescuento style={{ top: "0px", right: "5px", height: "30px" }}>
            {prod.descuento}%off efectivo
          </DivDescuento>
        )}
        <img style={{ width: "100%" }} src={prod.fotos[0]} alt="" />
      </DivContainerImg>
      <DivContainerDetailsProd>
        <DivContainerName>
          <span>{prod.name}</span>
        </DivContainerName>
        <span className="price">${prod.price}</span>
        <DivContainerCuotas>
          {tarjeta} cuotas sin interes de ${Math.floor(prod.price / tarjeta)}
        </DivContainerCuotas>
      </DivContainerDetailsProd>
    </DivContainerProd>
  );
};
CardProd.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default CardProd;
