import React from "react";
import {
  ButtonCount,
  DivContainerCount,
} from "../../styles/Products/ProdInd/prodIndStyles";
import { useToast } from "@chakra-ui/react";

const Count = ({ count, setCount, stockSelected, talleSelected }) => {
  const toast = useToast();

  const handlerSub = () => {
    if (stockSelected === 0) {
      return toast({
        title: "Error de talle",
        description: "Por favor selecicona un talle",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
    if (count === 1) {
      return toast({
        title: "Error de cantidad",
        description: "No puedes ingresar menos de una cantidad",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setCount((count) => count - 1);
  };

  const handlerAdd = () => {
    if (!talleSelected) {
      return toast({
        title: "Error de talle",
        description:
          "Antes de agregar una cantidad, por favor selecicona un talle",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
    if (stockSelected === 0) return;
    if (count === stockSelected) {
      return toast({
        title: "Error de stock",
        description: `Para este producto solamente tenemos ${stockSelected} unidad${
          stockSelected > 1 ? "es" : ""
        }`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setCount((count) => count + 1);
  };

  return (
    <DivContainerCount>
      <ButtonCount onClick={handlerSub}>-</ButtonCount>
      <span>{stockSelected === 0 ? "Sin Stock" : count}</span>
      <ButtonCount onClick={handlerAdd}>+</ButtonCount>
    </DivContainerCount>
  );
};

export default Count;
