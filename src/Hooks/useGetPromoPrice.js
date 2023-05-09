const useGetPromoPrice = (price, promo) => {
  const promoPrice = Math.floor(price - (price * promo) / 100);
  return promoPrice;
};

export default useGetPromoPrice;
