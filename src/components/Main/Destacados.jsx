import Slider from "react-slick";
import "../../styles/Main/destacados.css";
import { settingsDestacados } from "../../Data/settingsCarousels";
import {
  CenterSlider,
  SliderStyled,
  TitleMain,
} from "../../styles/Main/destacados";
import CardProducts from "./CardProducts";

const Destacados = ({ products }) => {
  const productsFiltered = products.filter((product) => product.promo === true);

  return (
    <SliderStyled>
      <TitleMain>Productos Destacados</TitleMain>
      <CenterSlider>
        <div>
          <Slider {...settingsDestacados}>
            {productsFiltered.map((prod) => (
              <CardProducts key={prod.sku} prod={prod} />
            ))}
          </Slider>
        </div>
      </CenterSlider>
    </SliderStyled>
  );
};

export default Destacados;
