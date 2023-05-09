const useGetproductSelected = (sku, products) => {
  let productSelected = products.filter((prod) => prod.sku === sku);
  return productSelected;
};

export default useGetproductSelected;
