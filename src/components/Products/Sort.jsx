import { useDispatch } from "react-redux";
import { DivContainerButtons } from "../../styles/Products/productsStyles";
import { sortedProducts } from "../../redux/productsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  return (
    <DivContainerButtons>
      <div>
        <span>Ordenar por</span>
        <select
          id="talles"
          name="talle"
          onChange={(e) => dispatch(sortedProducts(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>
            Seleccione una opcion
          </option>
          <option value="reset">Restablecer Orden</option>
          <option value="menorPrice">Menor Precio</option>
          <option value="mayorPrice">Mayor Precio</option>
        </select>
      </div>
    </DivContainerButtons>
  );
};

export default Sort;
