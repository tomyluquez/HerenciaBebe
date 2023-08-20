import { useSelector } from "react-redux";

const useGetPrices = (products) => {
  console.log(products);
  const descEft = useSelector(
    (state) => state.datosComercio.formasPago.efectivo
  );

  let totalPriceEft = 0;
  let totalPrice = 0;

  products.map((product) => {
    if (product.promo) {
      totalPriceEft +=
        Math.floor(product.price - (product.price * product.descuento) / 100) *
        product.cantidad;
    } else {
      totalPriceEft +=
        Math.floor(product.price - (product.price * descEft) / 100) *
        product.cantidad;
    }
    totalPrice += product.priceTar;
  });

  return [totalPriceEft, totalPrice];
};

export default useGetPrices;
