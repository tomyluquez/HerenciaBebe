import { useParams } from "react-router";
import Products from "./Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { filterProducts } from "../redux/productsSlice";

const ProductsCategory = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  useEffect(() => {
    dispatch(
      filterProducts({
        type: params.category === "2x1" ? "temporada" : "category",
        value: params.category === "2x1" ? "Invierno" : params.category,
      })
    );
  }, [filterProducts]);

  return (
    <Products
      titlePromo={
        params.category === "2x1"
          ? "Solo se efectuara el descuento comprando de a 2 prendas y se abonará la de mayor valor. Combinalas como quieras. (Los conjuntos ya cuentan como 2 piezas)"
          : ""
      }
    />
  );
};

export default ProductsCategory;
