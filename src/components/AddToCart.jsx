import { useDispatch } from "react-redux";
import {
  ButtonDisabled,
  ButtonIcon,
  ButtonSvg,
  ButtonText,
} from "../styles/Main/destacados";
import { ButtonSeeMore } from "../styles/Main/categories.Styles";
import PropTypes from "prop-types";
import { setStock } from "../redux/productsSlice";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { addProduct } from "../redux/cartSlices";
import { toggleMenues } from "../redux/opens";
import { useToast } from "@chakra-ui/react";

const AddToCart = ({ stock, talleSelected, prod }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handlerAddToCart = () => {
    if (!talleSelected) {
      return toast({
        title: "Error",
        description: "Por favor selecicona un talle",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }

    const newProduct = {
      name: prod.name,
      sku: prod.sku,
      price: prod.price,
      promo: prod.promo,
      descuento: prod.descuento,
      foto: prod.fotos[0],
      talle: talleSelected,
      cantidad: 1,
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

  if (stock === 0) {
    return (
      <ButtonDisabled disabled>
        <ButtonText>Sin Stock</ButtonText>
      </ButtonDisabled>
    );
  }

  return (
    <ButtonSeeMore
      type="button"
      onClick={handlerAddToCart}
      style={{ width: "280px", paddingLeft: "25px" }}
    >
      Agregar al carrito
    </ButtonSeeMore>
  );
};
AddToCart.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default AddToCart;
