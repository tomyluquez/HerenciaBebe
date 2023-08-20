import { useSelector } from "react-redux";

const useGetDescuentos = (formaPago, cupon, products) => {
  console.log(products);
  const descEft = useSelector(
    (state) => state.datosComercio.formasPago.efectivo
  );
  let descuentoEft = 0;
  let descuentoCupon = 0;
  let totalDescuentos = 0;
  let totalPagar = 0;
  const totalPrices = products.reduce(
    (acc, prod) => acc + prod.price * prod.cantidad,
    0
  );
  let descuentoInd = 0;
  if (formaPago === "efectivo") {
    products.map((product) => {
      if (product.promo) {
        descuentoInd +=
          Math.floor(
            product.price - (product.price * product.descuento) / 100
          ) * product.cantidad;
      } else {
        descuentoInd +=
          Math.floor(product.price - (product.price * descEft) / 100) *
          product.cantidad;
      }
    });
    descuentoEft = totalPrices - descuentoInd;
  }

  const totalPricesTar = products.reduce((acc, prod) => acc + prod.priceTar, 0);

  if (cupon && formaPago === "efectivo") {
    descuentoCupon = Math.floor(((totalPrices - descuentoEft) * cupon) / 100);
  } else {
    descuentoCupon = Math.floor((totalPricesTar * cupon) / 100);
  }

  totalDescuentos =
    descuentoCupon + descuentoEft || descuentoCupon || descuentoEft;
  if (formaPago === "efectivo" && descuentoCupon) {
    totalPagar = totalPrices - totalDescuentos;
  } else if (formaPago === "efectivo" && !descuentoCupon) {
    totalPagar = totalPrices - descuentoEft;
  } else if (formaPago !== "efectivo" && descuentoCupon) {
    totalPagar = totalPricesTar - descuentoCupon;
  } else {
    totalPagar = totalPricesTar;
  }
  console.log(totalPagar);
  return [descuentoEft, descuentoCupon, totalDescuentos, totalPagar];
};

export default useGetDescuentos;
