import { cupones } from "./../Data/cupones";

const useGetCupon = (cuponIngresado) => {
  let descuento;
  const checkCupon = cupones.filter((cupon) => cupon.name === cuponIngresado);
  if (checkCupon.length > 0) {
    descuento = checkCupon[0].descuento;
  } else {
    descuento = false;
  }

  return descuento;
};

export default useGetCupon;
