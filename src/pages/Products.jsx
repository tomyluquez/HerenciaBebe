import { useEffect, useState } from "react";
import CardProd from "../components/Products/CardProd";
import Filters from "../components/Products/Filters";
import Sort from "../components/Products/Sort";
import {
  ContainerPromo,
  DivContainerFilters,
  DivContainerGral,
  DivContainerProducts,
} from "../styles/Products/productsStyles";
import { useSelector } from "react-redux";
import Paginacion from "../components/Products/Paginacion";

const Products = ({ titlePromo }) => {
  const existeTitle = titlePromo !== "" && titlePromo !== undefined;
  const [isFirstRender, setIsFirstRender] = useState(true);

  const productsFiltered = useSelector(
    (state) => state.productsState.productsFiltered
  );
  const [prodPorPagina, setProdPorPagina] = useState(12);
  const [biggerTwelve, setBiggerTwelve] = useState(
    productsFiltered.length > 12
  );
  useEffect(() => {
    if (isFirstRender) {
      window.scrollTo(0, 0);
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  useEffect(() => {
    setBiggerTwelve(productsFiltered.length > 12);
  }, [productsFiltered]);

  return (
    <DivContainerProducts>
      <DivContainerFilters>
        <Sort />
        <Filters />
      </DivContainerFilters>
      {existeTitle && <ContainerPromo>{titlePromo}</ContainerPromo>}
      <DivContainerGral>
        {biggerTwelve
          ? productsFiltered
              .slice(0, prodPorPagina)
              .map((prod) => <CardProd key={prod.sku} prod={prod} />)
          : productsFiltered.map((prod) => (
              <CardProd key={prod.sku} prod={prod} />
            ))}
      </DivContainerGral>

      {biggerTwelve && (
        <Paginacion prods={prodPorPagina} setProds={setProdPorPagina} />
      )}
    </DivContainerProducts>
  );
};

export default Products;
