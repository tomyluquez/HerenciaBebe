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
import Paginacion from "../components/Products/Paginacion";

const Products = () => {
  window.scrollTo(0, 0);
  const productsFiltered = useSelector(
    (state) => state.productsState.productsFiltered
  );
  const [pagina, setPagina] = useState(1);
  const prodPorPagina = 12;
  const cantPaginas = productsFiltered.length / prodPorPagina;

  useEffect(() => {
    setPagina(1);
  }, [productsFiltered]);

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
            (pagina - 1) * prodPorPagina + prodPorPagina
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
