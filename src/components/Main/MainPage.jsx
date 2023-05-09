import Carousel from "./Carousel";
import Categories from "./Categories";
import Destacados from "./Destacados";
import { ButtonSeeMore, MainPpal } from "./../../styles/Main/categories.Styles";
import { useNavigate } from "react-router-dom";

const MainPage = ({ products }) => {
  const navigate = useNavigate();
  return (
    <MainPpal>
      <Carousel />
      <Categories />
      <Destacados products={products} />
      <ButtonSeeMore
        style={{ marginTop: "50px" }}
        onClick={() => navigate("/productos")}
      >
        Ver todos los productos
      </ButtonSeeMore>
    </MainPpal>
  );
};

export default MainPage;
