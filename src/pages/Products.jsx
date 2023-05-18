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
import Paginacion from "../components/Products/Paginacion";

const Products = () => {
  window.scrollTo(0, 0);
  const productsFiltered = useSelector(
    (state) => state.productsState.productsFiltered
  );
  const [pagina, setPagina] = useState(1);
  const prodPorPagina = 10;
  const cantPaginas = productsFiltered.length / prodPorPagina;

  return (
    <DivContainerProducts>
      <DivContainerFilters>
        <Sort />
        <Filters />
      </DivContainerFilters>
      <DivContainerGral>
        {productsFiltered
          .slice(
            (pagina - 1) * prodPorPagina,
            (pagina - 1) * prodPorPagina + 10
          )
          .map((prod) => (
            <CardProd key={prod.sku} prod={prod} />
          ))}
      </DivContainerGral>
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        cantPaginas={cantPaginas}
      />
    </DivContainerProducts>
  );
};

export default Products;
