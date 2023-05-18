import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useGetproductSelected from "../Hooks/useGetProductSelected";
import { ButtonSeeMore } from "../styles/Main/categories.Styles";
import InfoProduct from "../components/ProductSelected/InfoProduct";
import { DivContainerButton } from "../styles/Products/productsStyles";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../redux/cartSlices";
import { useDispatch } from "react-redux";
import { setStock } from "../redux/productsSlice";
import { toggleMenues } from "../redux/opens";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const ProductSelected = ({ products }) => {
  const { sku } = useParams();
  const productSelected = useGetproductSelected(sku, products);
  const [talleSelected, setTalleSelected] = useState(null);
  const [count, setCount] = useState(1);
  const [stockSelected, setStockSelected] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      window.scrollTo(0, 0);
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

  const handlerSubmitProd = () => {
    if (!talleSelected) {
      return toast({
        title: "Error de talle",
        description: "Por favor selecicona un talle",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    if (stockSelected <= 0) {
      return toast({
        title: "Error de stock",
        description: "No hay talle de este producto",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    const radios = document.getElementsByName("talle");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }

    const newProduct = {
      name: productSelected[0].name,
      sku: productSelected[0].sku,
      price: productSelected[0].price,
      priceTar: productSelected[0].priceTar,
      marca: productSelected[0].marca,
      promo: productSelected[0].promo,
      descuento: productSelected[0].descuento,
      foto: productSelected[0].fotos[0],
      talle: talleSelected,
      cantidad: count,
      uid: uuidv4(),
    };

    dispatch(addProduct(newProduct));
    dispatch(
      setStock({
        sku: newProduct.sku,
        talle: newProduct.talle,
        stock: newProduct.cantidad,
        accion: "quitar",
      })
    );
    dispatch(toggleMenues("cart"));
    navigate("/productos");
    toast({
      title: "Producto Agregado",
      description: "El producto se ha agregado correctamente",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <InfoProduct
        prod={productSelected[0]}
        talleSelected={talleSelected}
        setTalleSelected={setTalleSelected}
        setStockSelected={setStockSelected}
        stockSelected={stockSelected}
        count={count}
        setCount={setCount}
      />
      <DivContainerButton>
        <ButtonSeeMore onClick={handlerSubmitProd}>
          Agregar al carrito
        </ButtonSeeMore>
      </DivContainerButton>
    </>
  );
};

export default ProductSelected;
