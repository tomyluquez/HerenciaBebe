import styled from "styled-components";
import { ButtonAddToCart } from "./destacados";
import { colorBlanco } from "../generalStyles";

export const DivContainerCategories = styled.div`
  width: 100%;
  height: ${({ seeMore }) => (seeMore ? "1200px" : "350px")};
  overflow: hidden;
  display: grid;
  place-items: center;
  grid-row-gap: 50px;
  grid-template-columns: repeat(4, 1fr);
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
`;

export const ImgCategories = styled.img`
  max-width: 350px;
  height: 350px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 700px) {
    width: 160px;
    height: 160px;
  }
`;

export const ButtonSeeMore = styled(ButtonAddToCart)`
  color: ${colorBlanco};
  width: 90%;
  justify-content: center;
`;
