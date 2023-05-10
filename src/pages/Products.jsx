import { useEffect, useState } from "react";
import CardProd from "../components/Products/CardProd";
import Filters from "../components/Products/Filters";
import Sort from "../components/Products/Sort";
import {
  DivContainerFilters,
  DivContainerGral,
  DivContainerProducts,
} from "../styles/Products/productsStyles";
import { useSelector } from "react-redux";

const Products = () => {
  window.scrollTo(0, 0);

  const products = useSelector((state) => state.productsState.products);
  const [isLoading, setIsLoading] = useState(true);
  const productsFiltered = useSelector(
    (state) => state.productsState.productsFiltered
  );

  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    if (productsFiltered.length > 0) {
      setProductsList(productsFiltered);
    } else {
      setProductsList(products);
    }
    setIsLoading(false);
  }, [products, productsFiltered]);

  if (isLoading) {
    return <div>CARGANDO ...</div>;
  }

  return (
    <DivContainerProducts>
      <DivContainerFilters>
        <Sort />
        <Filters />
      </DivContainerFilters>
      <DivContainerGral>
        {productsList.map((prod) => (
          <CardProd key={prod.sku} prod={prod} />
        ))}
      </DivContainerGral>
    </DivContainerProducts>
  );
};

export default Products;
