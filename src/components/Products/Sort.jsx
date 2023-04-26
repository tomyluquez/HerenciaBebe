import { ButtonSeeMore } from "./../../styles/Main/categories.Styles";
import useGetFilters from "../../Hooks/useGetFilters";
import {
  DivCategories,
  DivContainerButtons,
  DivSorted,
  DivTalles,
  DivTemporadas,
  LabelStyles,
} from "../../styles/Products/productsStyles";
import { CloseIcon } from "../../styles/Cart/cartStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import { useDispatch, useSelector } from "react-redux";

const Sort = ({ productsList }) => {
  const sortOpen = useSelector((state) => state.toggleMenues.sort);
  const dispatch = useDispatch();

  return (
    <DivContainerButtons>
      <ButtonSeeMore onClick={() => dispatch(toggleMenues("sort"))}>
        Ordenal por
      </ButtonSeeMore>
      <DivSorted sortOpen={sortOpen}>
        <CloseIcon onClick={() => dispatch(closeMenues())} />
        <>
          <input
            type="radio"
            name="selected"
            id={"relevantes"}
            value={"relevantes"}
          />
          <LabelStyles htmlFor={"relevantes"}>Mas Relevantes</LabelStyles>
        </>
        <>
          <input
            type="radio"
            name="selected"
            id={"menorPrecio"}
            value={"menorPrecio"}
          />
          <LabelStyles htmlFor={"menorPrecio"}>Menor Precio</LabelStyles>
        </>
        <>
          <input
            type="radio"
            name="selected"
            id={"mayorPrecio"}
            value={"mayorPrecio"}
          />
          <LabelStyles htmlFor={"mayorPrecio"}>Mayor Precio</LabelStyles>
        </>
      </DivSorted>
    </DivContainerButtons>
  );
};

export default Sort;
