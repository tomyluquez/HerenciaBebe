import { useState } from "react";
import { imgsCategories } from "../../Data/images";
import {
  ButtonSeeMore,
  DivContainerCategories,
  ImgCategories,
} from "../../styles/Main/categories.Styles";
import { TitleMain } from "../../styles/Main/destacados";

const Categories = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <TitleMain>Nuestras Categorias</TitleMain>
      <DivContainerCategories seeMore={seeMore}>
        {imgsCategories.map((img, index) => (
          <ImgCategories key={index} src={img} alt={img} />
        ))}
      </DivContainerCategories>
      <ButtonSeeMore onClick={() => setSeeMore(!seeMore)}>
        {seeMore ? "Ver Menos" : "Ver Mas"}
      </ButtonSeeMore>
    </>
  );
};

export default Categories;
