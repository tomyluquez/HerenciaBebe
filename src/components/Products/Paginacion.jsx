import React from "react";
import {
  ButtonBack,
  ButtonNext,
  DivContainerPaginacion,
  DivPages,
  SpanCurrentPage,
} from "../../styles/Products/productsStyles";

const Paginacion = ({ pagina, setPagina, cantPaginas }) => {
  const totalPages = Math.ceil(cantPaginas);
  const handlerNextPage = () => {
    setPagina(pagina + 1);
  };
  const handlerPrevPage = () => {
    setPagina(pagina - 1);
  };

  return (
    <DivContainerPaginacion>
      {pagina > 1 && <ButtonBack onClick={handlerPrevPage}>atras</ButtonBack>}
      <span style={{ color: "white" }}>Pagina</span>
      <DivPages>
        <SpanCurrentPage>{pagina}</SpanCurrentPage>
        <span style={{ color: "white" }}>de {totalPages}</span>
      </DivPages>
      {pagina < totalPages && (
        <ButtonNext onClick={handlerNextPage}>Siguiente</ButtonNext>
      )}
    </DivContainerPaginacion>
  );
};

export default Paginacion;
