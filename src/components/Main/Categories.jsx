import { useState } from "react";
import { imgsCategories } from "../../Data/images";
import {
  ButtonSeeMore,
  DivContainerCategories,
  DivContainerImgAndSpan,
  ImgCategories,
  SpanCategories,
} from "../../styles/Main/categories.Styles";
import { TitleMain } from "../../styles/Main/destacados";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { filterProducts, removeFilters } from "../../redux/productsSlice";

const Categories = () => {
  const [seeMore, setSeeMore] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerClickCategory = (img) => {
    dispatch(removeFilters());
    dispatch(
      filterProducts({
        type: "category",
        value: img.value,
      })
    );
    navigate("/productos");
  };

  return (
    <>
      <TitleMain>Nuestras Categorias</TitleMain>
      <DivContainerCategories seeMore={seeMore}>
        {imgsCategories.map((img, index) => (
          <DivContainerImgAndSpan
            key={index}
            onClick={() => handlerClickCategory(img)}
          >
            <ImgCategories src={img.src} alt={img} />
            <SpanCategories>{img.value.toUpperCase()}</SpanCategories>
          </DivContainerImgAndSpan>
        ))}
      </DivContainerCategories>
      <ButtonSeeMore onClick={() => setSeeMore(!seeMore)}>
        {seeMore ? "Ver Menos" : "Ver Mas"}
      </ButtonSeeMore>
    </>
  );
};

export default Categories;
