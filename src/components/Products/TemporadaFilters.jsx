import React from "react";
import {
  DivTemporadas,
  LabelStyles,
} from "../../styles/Products/productsStyles";
import useGetFilters from "../../Hooks/useGetFilters";
import { useDispatch } from "react-redux";
import { closeMenues } from "../../redux/opens";
import { filterProducts } from "../../redux/productsSlice";

const TemporadaFilters = ({
  productsList,
  temporadaOpen,
  setTallesOpen,
  setCategoriesOpen,
  setTemporadaOpen,
}) => {
  const [, , temporada] = useGetFilters(productsList);
  const dispatch = useDispatch();

  const handlerOpens = (referente) => {
    if (referente === "temp") {
      setTallesOpen(false);
      setCategoriesOpen(false);
      setTemporadaOpen(!temporadaOpen);
    }
  };

  const handlerChange = (e) => {
    dispatch(
      filterProducts({
        value: e.target.value,
        type: "temporada",
      })
    );

    setTallesOpen(false);
    setCategoriesOpen(!temporadaOpen);
    setTemporadaOpen(false);
    dispatch(closeMenues());
  };

  return (
    <>
      <h5 onClick={() => handlerOpens("temp")}>Temporadas</h5>
      {temporada.map((temp) => {
        return (
          <DivTemporadas tempOpen={temporadaOpen} key={temp}>
            <input
              type="radio"
              name="temp"
              id={temp}
              value={temp}
              onChange={(e) => handlerChange(e)}
            />
            <LabelStyles htmlFor={temp}>{temp}</LabelStyles>
          </DivTemporadas>
        );
      })}
    </>
  );
};

export default TemporadaFilters;
