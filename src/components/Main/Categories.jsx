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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerClickCategory = (img) => {
    dispatch(removeFilters());
    navigate(`/productos/categorias/${img.value}`);
  };

  return (
    <>
      <TitleMain>Nuestras Categorias</TitleMain>
      <DivContainerCategories>
        {imgsCategories
          .sort((a, b) => a.value.localeCompare(b.value))
          .map((img, index) => (
            <DivContainerImgAndSpan
              key={index}
              onClick={() => handlerClickCategory(img)}
            >
              <ImgCategories src={img.src} alt={img} loading="lazy" />
              <SpanCategories>{img.value.toUpperCase()}</SpanCategories>
            </DivContainerImgAndSpan>
          ))}
      </DivContainerCategories>
    </>
  );
};

export default Categories;
