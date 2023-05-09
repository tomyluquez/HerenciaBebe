import styled from "styled-components";
import { ButtonAddToCart } from "./destacados";
import { colorBlanco, colorPrincipal } from "../generalStyles";

export const MainPpal = styled.main`
  padding-top: 83px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

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

export const SpanCategories = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px 0px;
  transition: all 0.3s ease-in-out;
`;

export const ImgCategories = styled.img`
  max-width: 350px;
  height: 350px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 160px;
    height: 160px;
  }
`;

export const ButtonSeeMore = styled(ButtonAddToCart)`
  color: ${colorBlanco};
  width: 90%;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 700px) {
    width: 250px;
    margin-top: 30px;
    :hover {
      transform: scale(1.1);
      background-color: ${colorBlanco};
      color: ${colorPrincipal};
    }
  }
`;

export const DivContainerImgAndSpan = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 350px;
  height: 350px;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  :hover ${SpanCategories} {
    bottom: 15px;
    transform: scale(1.1);
  }
  @media screen and (max-width: 700px) {
    width: 160px;
    height: 160px;
  }
`;
