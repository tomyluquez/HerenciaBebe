import styled from "styled-components";
import { colorBlanco, colorPrincipal } from "../../generalStyles";

export const DivGeneral = styled.div`
  width: 100%;
  padding-top: 83px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    padding-top: 110px;
  }
`;

export const DivContainterName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 700px) {
    width: 30%;
  }
`;

export const DivSliderProd = styled.div`
  @media screen and (min-width: 700px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DivSlider = styled.div`
  margin-right: 0;
  width: 100%;
  position: relative;

  .slick-slider div {
    margin: 0;
  }
`;

export const NameProduct = styled.h2`
  text-align: center;
  color: ${colorBlanco};
`;

export const DivTallesAndCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 700px) {
      width: 30%;
    } 
}
`;

export const DivContainerCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  width: 170px;
  background-color: ${colorBlanco};
  padding: 5px 0px;
  border-radius: 30px;
`;

export const ButtonCount = styled.button`
  border: none;
  background-color: ${colorBlanco};
  color: ${colorPrincipal};
  font-size: 1.3rem;
  cursor: pointer;
`;
