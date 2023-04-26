import Slider from "react-slick";
import "../../styles/Main/destacados.css";
import { settingsDestacados } from "../../Data/settingsCarousels";
import { products } from "../../Data/products";
import {
  CenterSlider,
  SliderStyled,
  TitleMain,
} from "../../styles/Main/destacados";
import CardProducts from "./CardProducts";

const Destacados = () => {
  const productsFiltered = products.filter(
    (product) => product.temporada === "verano"
  );

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
