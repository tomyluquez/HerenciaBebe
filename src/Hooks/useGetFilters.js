const useGetFilters = (products) => {
  let categories = [];

  for (let product of products) {
    if (!categories.includes(product.category))
      categories.push(product.category);
  }
  categories.sort();

  let talles = [];

  for (let product of products) {
    const tallesFiltered = Object.keys(product.talles);
    tallesFiltered.map((talle) => {
      if (!talles.includes(talle)) talles.push(talle);
    });
  }
  talles.sort((a, b) => a + b);

  let temporada = [];

  for (let product of products) {
    if (!temporada.includes(product.temporada))
      temporada.push(product.temporada);
  }
  temporada.sort();

  return [categories, talles, temporada];
};

export default useGetFilters;
