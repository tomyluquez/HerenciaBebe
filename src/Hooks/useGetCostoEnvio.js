const useGetCostoEnvio = (formaPago, products) => {
  const envioGratis = 10000;
  const descEft = 10;
  let costo;
  let prices = 0;
  if (formaPago === "efectivo") {
    products.map((product) => {
      if (product.promo) {
        prices += Math.floor(
          product.price - (product.price * product.descuento) / 100
        );
      } else {
        prices += Math.floor(product.price - (product.price * descEft) / 100);
      }
    });
  } else {
    products.map((product) => {
      prices += product.priceTar;
    });
  }
  costo = envioGratis > prices;
  return [costo, prices];
};

export default useGetCostoEnvio;
