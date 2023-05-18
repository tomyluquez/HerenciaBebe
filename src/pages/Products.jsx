import { useEffect, useState } from "react";
import CardProd from "../components/Products/CardProd";
import Filters from "../components/Products/Filters";
import Sort from "../components/Products/Sort";
import {
  DivContainerFilters,
  DivContainerGral,
  DivContainerLoading,
  DivContainerProducts,
} from "../styles/Products/productsStyles";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";

const Products = () => {
  window.scrollTo(0, 0);
  const products = useSelector((state) => state.productsState.products);

  const productsFiltered = useSelector(
    (state) => state.productsState.productsFiltered
  );
  const [loading, setLoading] = useState(true);

  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    if (productsFiltered.length > 0) {
      setProductsList(productsFiltered);
    } else {
      setProductsList(products);
    }
    setLoading(false);
  }, [products, productsFiltered]);

  if (loading) {
    return (
      <DivContainerLoading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="white"
          size="xl"
        />
      </DivContainerLoading>
    );
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
