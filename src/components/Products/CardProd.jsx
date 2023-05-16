import { useSelector } from "react-redux";
import {
  DivContainerCuotas,
  DivContainerDetailsProd,
  DivContainerImg,
  DivContainerName,
  DivContainerProd,
  ImgProd,
} from "../../styles/Products/productsStyles";
import { useNavigate } from "react-router";
import { DivDescuento, DivPrices } from "../../styles/Main/destacados";
import useGetPromoPrice from "../../Hooks/useGetPromoPrice";
import "react-lazy-load-image-component/src/effects/blur.css";

const CardProd = ({ prod }) => {
  const navigate = useNavigate();
  const {
    formasPago: { tarjeta, efectivo },
  } = useSelector((state) => state.datosComercio);
  const promoPrice = useGetPromoPrice(prod.price, prod.descuento);

  return (
    <DivContainerProd onClick={() => navigate(`/productos/${prod.sku}`)}>
      <DivContainerImg>
        {prod.promo ? (
          <DivDescuento style={{ top: "0px", right: "5px", height: "30px" }}>
            {prod.descuento}%off efectivo
          </DivDescuento>
        ) : (
          <DivDescuento style={{ top: "0px", right: "5px", height: "30px" }}>
            {efectivo}%off efectivo
          </DivDescuento>
        )}
        <ImgProd src={prod.fotos[0]} alt="" effect="blur" />
      </DivContainerImg>
      <DivContainerDetailsProd>
        <DivContainerName>
          <span>{prod.name}</span>
        </DivContainerName>
        <DivPrices style={{ width: "auto", padding: "0" }}>
          <p>${promoPrice}</p>
          {prod.promo ? <p>${prod.price}</p> : null}
        </DivPrices>
        <DivContainerCuotas>
          {tarjeta} cuotas fijas de ${Math.floor(prod.priceTar / tarjeta)}
        </DivContainerCuotas>
      </DivContainerDetailsProd>
    </DivContainerProd>
  );
};

export default CardProd;
