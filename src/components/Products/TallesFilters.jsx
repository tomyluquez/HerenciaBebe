import { useDispatch } from "react-redux";
import useGetFilters from "../../Hooks/useGetFilters";
import { DivTalles, LabelStyles } from "../../styles/Products/productsStyles";
import { filterProducts } from "../../redux/productsSlice";
import { closeMenues } from "../../redux/opens";

const TallesFilters = ({
  productsList,
  tallesOpen,
  setTallesOpen,
  setCategoriesOpen,
  setTemporadaOpen,
}) => {
  const [, talles] = useGetFilters(productsList);
  const dispatch = useDispatch();

  const handlerOpens = (referente) => {
    if (referente === "tal") {
      setTallesOpen(!tallesOpen);
      setCategoriesOpen(false);
      setTemporadaOpen(false);
    }
  };

  const handlerChange = (e) => {
    dispatch(
      filterProducts({
        value: e.target.value,
        type: "talles",
      })
    );

    setTallesOpen(false);
    setCategoriesOpen(!tallesOpen);
    setTemporadaOpen(false);
    dispatch(closeMenues());
  };

  return (
    <>
      <h5 onClick={() => handlerOpens("tal")}>Talles</h5>
      {talles.map((talle) => {
        return (
          <DivTalles talOpen={tallesOpen} key={talle}>
            <input
              type="radio"
              name="talle"
              id={talle}
              value={talle}
              onChange={(e) => handlerChange(e)}
            />
            <LabelStyles htmlFor={talle}>{talle}</LabelStyles>
          </DivTalles>
        );
      })}
    </>
  );
};

export default TallesFilters;
