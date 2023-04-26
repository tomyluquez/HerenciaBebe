import {
  ButtonAddToCart,
  ButtonDisabled,
  ButtonIcon,
  ButtonSvg,
  ButtonText,
} from "../styles/Main/destacados";
import PropTypes from "prop-types";

const AddToCart = ({ stock }) => {
  if (stock === 0) {
    return (
      <ButtonDisabled disabled>
        <ButtonText>Sin Stock</ButtonText>
      </ButtonDisabled>
    );
  }

  return (
    <ButtonAddToCart type="button">
      <ButtonText>Agregar al Carrito</ButtonText>
      <ButtonIcon>
        <ButtonSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </ButtonSvg>
      </ButtonIcon>
    </ButtonAddToCart>
  );
};
AddToCart.propTypes = {
  prod: PropTypes.object.isRequired,
};

export default AddToCart;
