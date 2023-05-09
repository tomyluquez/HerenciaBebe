const useGetCostoEnvio = (formaPago, products) => {
  const envioGratis = 10000;
  let costo;
  let prices = 0;
  if (formaPago === "efectivo") {
    products.map((product) => {
      prices += Math.floor(
        product.price - (product.price * product.descuento) / 100
      );
    });
  } else {
    products.map((product) => {
      prices += product.price;
    });
  }
  costo = envioGratis > prices;
  return [costo, prices];
};

export default useGetCostoEnvio;
