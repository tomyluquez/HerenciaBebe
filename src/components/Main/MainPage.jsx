import Carousel from "./Carousel";
import Categories from "./Categories";
import Destacados from "./Destacados";
import { ButtonSeeMore, MainPpal } from "./../../styles/Main/categories.Styles";
import { useNavigate } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const MainPage = ({ products }) => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  return (
    <LazyLoadComponent>
      <MainPpal>
        <Carousel />
        <Categories />
        <Destacados products={products} />
        <ButtonSeeMore
          style={{ marginTop: "50px", marginLeft: "0", marginRight: "0" }}
          onClick={() => navigate("/productos")}
        >
          Ver todos los productos
        </ButtonSeeMore>
      </MainPpal>
    </LazyLoadComponent>
  );
};

export default MainPage;
