import { ButtonSeeMore } from "./../../styles/Main/categories.Styles";
import {
  DivContainerButtons,
  DivFiltered,
} from "../../styles/Products/productsStyles";
import { useState } from "react";
import { CloseIcon } from "../../styles/Cart/cartStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import { useDispatch, useSelector } from "react-redux";
import TallesFilters from "./TallesFilters";
import CategoriesFilters from "./CategoriesFilters";
import TemporadaFilters from "./TemporadaFilters";
import { products } from "./../../Data/products";
import { removeFilters } from "../../redux/productsSlice";

const Filters = () => {
  const [tallesOpen, setTallesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [temporadaOpen, setTemporadaOpen] = useState(false);
  const filterOpen = useSelector((state) => state.toggleMenues.filters);
  const dispatch = useDispatch();

  const handlerDeleteFilters = () => {
    dispatch(removeFilters());
    dispatch(closeMenues());
  };

  return (
    <DivContainerButtons>
      <ButtonSeeMore onClick={() => dispatch(toggleMenues("filter"))}>
        Filtrar
      </ButtonSeeMore>
      <DivFiltered filterOpen={filterOpen}>
        <CloseIcon onClick={() => dispatch(closeMenues())} />
        <TallesFilters
          productsList={products}
          tallesOpen={tallesOpen}
          setTallesOpen={setTallesOpen}
          setCategoriesOpen={setCategoriesOpen}
          setTemporadaOpen={setTemporadaOpen}
        />
        <CategoriesFilters
          productsList={products}
          categoriesOpen={categoriesOpen}
          setTallesOpen={setTallesOpen}
          setCategoriesOpen={setCategoriesOpen}
          setTemporadaOpen={setTemporadaOpen}
        />
        <TemporadaFilters
          productsList={products}
          temporadaOpen={temporadaOpen}
          setTallesOpen={setTallesOpen}
          setCategoriesOpen={setCategoriesOpen}
          setTemporadaOpen={setTemporadaOpen}
        />
        <ButtonSeeMore onClick={handlerDeleteFilters}>
          Borrar Filtros
        </ButtonSeeMore>
      </DivFiltered>
    </DivContainerButtons>
  );
};

export default Filters;
