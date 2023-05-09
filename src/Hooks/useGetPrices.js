import { useSelector } from "react-redux";

const useGetPrices = (products) => {
  const descEft = useSelector(
    (state) => state.datosComercio.formasPago.efectivo
  );

  let totalPriceEft = 0;
  let totalPrice = 0;

  products.map((product) => {
    if (product.promo) {
      totalPriceEft += Math.floor(
        product.price - (product.price * product.descuento) / 100
      );
    } else {
      totalPriceEft += Math.floor(
        product.price - (product.price * descEft) / 100
      );
    }
    totalPrice += product.price;
  });

  return [totalPriceEft, totalPrice];
};

export default useGetPrices;
