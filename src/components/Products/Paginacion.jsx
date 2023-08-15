import React from "react";
import {
  ButtonSee,
  DivContainerPaginacion,
} from "../../styles/Products/productsStyles";
import { AiOutlineDown } from "react-icons/ai";

const Paginacion = ({ prods, setProds }) => {
  const handlerSeeMore = () => {
    setProds(prods + 12);
  };

  return (
    <DivContainerPaginacion>
      <ButtonSee onClick={handlerSeeMore}>
        Ver mas <AiOutlineDown />
      </ButtonSee>
    </DivContainerPaginacion>
  );
};

export default Paginacion;
