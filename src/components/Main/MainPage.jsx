import Carousel from "./Carousel";
import Categories from "./Categories";
import Destacados from "./Destacados";
import { ButtonSeeMore } from "./../../styles/Main/categories.Styles";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <main style={{ paddingTop: "83px", textAlign: "center" }}>
      <Carousel />
      <Categories />
      <Destacados />
      <ButtonSeeMore
        style={{ marginTop: "50px" }}
        onClick={() => navigate("/productos")}
      >
        Ver todos los productos
      </ButtonSeeMore>
    </main>
  );
};

export default MainPage;
