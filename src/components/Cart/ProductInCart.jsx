import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import {
  DivContainerDetails,
  DivContainerImg,
  DivContainerProduct,
  DivDetails,
} from "../../styles/Cart/cartStyles";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/cartSlices";
import { setStock } from "../../redux/productsSlice";
import { toggleMenues } from "../../redux/opens";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";

const ProductInCart = ({ product }) => {
  const productsCart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const deleteProduct = () => {
    dispatch(
      removeProduct({
        uid: product.uid,
        cantidad: product.cantidad,
        price: product.price,
      })
    );
    dispatch(
      setStock({
        sku: product.sku,
        talle: product.talle,
        stock: product.cantidad,
        accion: "devolver",
      })
    );
    if (productsCart.length === 1) {
      dispatch(toggleMenues("cart"));
    }
    navigate("/productos");
    return toast({
      title: "Eliminar",
      description: "El producto se ha eliminado correctamente del carrito",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <DivContainerProduct>
      <DivContainerImg>
        <img
          style={{ width: "100%", height: "90%" }}
          src={product.foto}
          alt={product.name}
        />
      </DivContainerImg>
      <DivContainerDetails>
        <h5>{product.name.toUpperCase()}</h5>
        <DivDetails>
          <span>Talle: {product.talle}</span>
          <span>Cantidad: {product.cantidad}</span>
          <span>Precio: ${product.priceTar}</span>
          <span>
            Eliminar:{" "}
            <BsFillTrash3Fill
              onClick={deleteProduct}
              style={{ cursor: "pointer" }}
            />
          </span>
        </DivDetails>
      </DivContainerDetails>
    </DivContainerProduct>
  );
};

export default ProductInCart;
