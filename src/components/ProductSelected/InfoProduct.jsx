import React from "react";
import {
  CenterSlider,
  DivDescuentoInProd,
  DivPrices,
  DivTalles,
} from "../../styles/Main/destacados";
import Slider from "react-slick";
import {
  DivContainerCuotas,
  ImgProdSelected,
  LabelStyles,
} from "../../styles/Products/productsStyles";
import { settingsProdSelected } from "../../Data/settingsCarousels";
import useGetPromoPrice from "../../Hooks/useGetPromoPrice";
import { useSelector } from "react-redux";
import Count from "./Count";
import {
  NameProduct,
  DivContainterName,
  DivGeneral,
  DivTallesAndCount,
  DivSliderProd,
  DivSlider,
} from "../../styles/Products/ProdInd/prodIndStyles";

const InfoProduct = ({
  prod,
  talleSelected,
  setTalleSelected,
  setStockSelected,
  stockSelected,
  count,
  setCount,
}) => {
  const promoPrice = useGetPromoPrice(prod.price, prod.descuento);
  const {
    formasPago: { tarjeta },
  } = useSelector((state) => state.datosComercio);

  const handlerTalles = (talle) => {
    setStockSelected(prod.talles[talle]);
    setTalleSelected(talle);
  };

  return (
    <DivGeneral>
      <DivContainterName>
        <NameProduct>{prod.name}</NameProduct>
        {prod.promo ? (
          <>
            <DivPrices>
              <p>${promoPrice}</p>
              <p>${prod.price}</p>
            </DivPrices>
            <p style={{ textAlign: "center", margin: "0" }}>
              El descuento es solo para efectivo / transferencia
            </p>
          </>
        ) : (
          <DivPrices>
            <p>${prod.price}</p>
          </DivPrices>
        )}
        <DivContainerCuotas style={{ marginBottom: "30px", marginTop: "30px" }}>
          {tarjeta} cuotas sin interes de ${Math.floor(prod.price / tarjeta)}
        </DivContainerCuotas>
      </DivContainterName>

      <DivSliderProd>
        <DivSlider>
          <div>
            <Slider {...settingsProdSelected}>
              {prod.fotos.map((foto, index) => (
                <ImgProdSelected key={index} src={foto} alt="" />
              ))}
            </Slider>
            {prod.promo && (
              <DivDescuentoInProd>
                {prod.descuento}%off efectivo
              </DivDescuentoInProd>
            )}
          </div>
        </DivSlider>
      </DivSliderProd>
      <DivTallesAndCount>
        <p style={{ textAlign: "center" }}>Descripcion: {prod.descripcion}</p>
        <h5 style={{ textAlign: "center" }}>TALLES</h5>
        {Object.keys(prod.talles).map((talle) => {
          return (
            <DivTalles
              key={talle}
              style={{ width: "auto", alignItems: "center" }}
            >
              <input type="radio" name="talle" id={talle} value={talle} />
              <LabelStyles
                style={{ textAlign: "center" }}
                htmlFor={talle}
                onClick={(e) => handlerTalles(e.target.innerText)}
              >
                {talle}
              </LabelStyles>
            </DivTalles>
          );
        })}
        {stockSelected !== null ? (
          <span style={{ marginTop: "10px" }}>
            Stock disponible: {stockSelected}
          </span>
        ) : null}
        <Count
          count={count}
          setCount={setCount}
          stockSelected={stockSelected}
          talleSelected={talleSelected}
        />
      </DivTallesAndCount>
    </DivGeneral>
  );
};

export default InfoProduct;
