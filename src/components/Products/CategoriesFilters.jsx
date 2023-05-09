import { useDispatch } from "react-redux";
import useGetFilters from "../../Hooks/useGetFilters";
import {
  DivCategories,
  LabelStyles,
} from "../../styles/Products/productsStyles";
import { filterProducts } from "../../redux/productsSlice";
import { closeMenues } from "../../redux/opens";

const CategoriesFilters = ({
  productsList,
  categoriesOpen,
  setTallesOpen,
  setCategoriesOpen,
  setTemporadaOpen,
}) => {
  const [categories] = useGetFilters(productsList);
  const dispatch = useDispatch();

  const handlerOpens = (referente) => {
    if (referente === "cat") {
      setTallesOpen(false);
      setCategoriesOpen(!categoriesOpen);
      setTemporadaOpen(false);
    }
  };

  const handlerChange = (e) => {
    dispatch(
      filterProducts({
        value: e.target.value,
        type: "category",
      })
    );

    setTallesOpen(false);
    setCategoriesOpen(!categoriesOpen);
    setTemporadaOpen(false);
    dispatch(closeMenues());
  };

  return (
    <>
      <h5 onClick={() => handlerOpens("cat")}>Categorias</h5>
      {categories.map((category) => {
        return (
          <DivCategories catOpen={categoriesOpen} key={category}>
            <input
              type="radio"
              name="category"
              id={category}
              value={category}
              onChange={(e) => handlerChange(e)}
            />
            <LabelStyles htmlFor={category}>{category}</LabelStyles>
          </DivCategories>
        );
      })}
    </>
  );
};

export default CategoriesFilters;
