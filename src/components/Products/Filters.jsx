import { ButtonSeeMore } from "./../../styles/Main/categories.Styles";
import useGetFilters from "../../Hooks/useGetFilters";
import {
  DivCategories,
  DivContainerButtons,
  DivFiltered,
  DivTalles,
  DivTemporadas,
  LabelStyles,
} from "../../styles/Products/productsStyles";
import { useState } from "react";
import { CloseIcon } from "../../styles/Cart/cartStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import { useDispatch, useSelector } from "react-redux";

const Filters = ({ productsList }) => {
  const [categories, talles, temporada] = useGetFilters(productsList);
  const [tallesOpen, setTallesOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [temporadaOpen, setTemporadaOpen] = useState(false);
  const filterOpen = useSelector((state) => state.toggleMenues.filters);
  const dispatch = useDispatch();

  const handlerOpens = (referente) => {
    if (referente === "tal") {
      setTallesOpen(!tallesOpen);
      setCategoriesOpen(false);
      setTemporadaOpen(false);
    }
    if (referente === "cat") {
      setTallesOpen(false);
      setCategoriesOpen(!categoriesOpen);
      setTemporadaOpen(false);
    }
    if (referente === "temp") {
      setTallesOpen(false);
      setCategoriesOpen(false);
      setTemporadaOpen(!temporadaOpen);
    }
  };

  return (
    <DivContainerButtons>
      <ButtonSeeMore onClick={() => dispatch(toggleMenues("filter"))}>
        Filtrar
      </ButtonSeeMore>
      <DivFiltered filterOpen={filterOpen}>
        <CloseIcon onClick={() => dispatch(closeMenues())} />
        <>
          <h5 onClick={() => handlerOpens("tal")}>Talles</h5>
          {talles.map((talle) => {
            return (
              <DivTalles talOpen={tallesOpen} key={talle}>
                <input type="checkbox" name="talle" id={talle} value={talle} />
                <LabelStyles htmlFor={talle}>{talle}</LabelStyles>
              </DivTalles>
            );
          })}
        </>
        <>
          <h5 onClick={() => handlerOpens("cat")}>Categorias</h5>
          {categories.map((category) => {
            return (
              <DivCategories catOpen={categoriesOpen} key={category}>
                <input
                  type="checkbox"
                  name="category"
                  id={category}
                  value={category}
                />
                <LabelStyles htmlFor={category}>{category}</LabelStyles>
              </DivCategories>
            );
          })}
        </>
        <>
          <h5 onClick={() => handlerOpens("temp")}>Temporadas</h5>
          {temporada.map((temp) => {
            return (
              <DivTemporadas tempOpen={temporadaOpen} key={temp}>
                <input type="checkbox" name="temp" id={temp} value={temp} />
                <LabelStyles htmlFor={temp}>{temp}</LabelStyles>
              </DivTemporadas>
            );
          })}
        </>
        <ButtonSeeMore style={{ marginTop: "20px" }}>Aplicar</ButtonSeeMore>
      </DivFiltered>
    </DivContainerButtons>
  );
};

export default Filters;
