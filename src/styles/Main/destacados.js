import styled from "styled-components";
import { colorBlanco, colorPrincipal } from "../../styles/generalStyles";

export const SliderStyled = styled.div`
  width: 100%;
  overflow: hidden;

  .slick-list {
    position: relative;
    display: block !important;
    width: 100%;
    padding: 0 0 !important;
  }

  .slick-active:first-child {
    border: none;
    background-color: none !important;
  }

  .slick-slide div {
    width: auto;
    margin-right: 10px;
    @media screen and (max-width: 700px) {
      margin-right: 0px !important;
    }
  }

  button {
    z-index: 9 !important;
  }

  .slick-prev,
  .slick-next {
    z-index: 100 !important;
  }

  .slick-prev {
    left: 12px !important;
  }

  .slick-next {
    right: 12px !important;
  }
`;

export const TitleMain = styled.h2`
  text-align: center;
  margin-top: 3rem;
  color: ${colorBlanco};
`;

export const CenterSlider = styled.section`
  margin: 0 !important;
`;

export const DivImg = styled.div`
  border: 1px solid ${colorBlanco};
  display: block;
  padding: 20px 0;
  position: relative;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.8rem;
  margin-right: -10px !important;
`;

export const ImgDestacados = styled.img`
  align-self: center;
  width: 280px !important;
  height: 350px;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    height: 300px;
  }
`;

export const NameProduct = styled.p`
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 10px 0 25px;
  margin: 0 !important;
  color: ${colorBlanco};
`;

export const DivPrices = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  padding-left: 25px;
  > p:first-child {
    font-size: 1.5rem;
    margin: 0 !important;
    color: ${colorBlanco};
    font-weight: bold;
  }
  > p:nth-child(2) {
    text-decoration: line-through red;
    margin: 0 !important;
  }
`;

export const DivDescuento = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${colorBlanco};
  color: ${colorPrincipal};
  position: absolute;
  top: 20px;
  right: 30px;
  padding: 10px;
  border-radius: 10px;
  z-index: 10;
`;

export const DivTalles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0 10px 0 25px;
  color: ${colorBlanco};
  > select:nth-child(2) {
    padding: 10px 20px;
    width: 280px;
  }
`;

export const ButtonText = styled.span`
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
  transition: all 0.3s;
  font-family: montserrat alternates;
`;

export const ButtonIcon = styled.span`
  position: absolute;
  transform: translateX(250px);
  height: 100%;
  width: 39px;
  background-color: ${colorPrincipal};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

export const ButtonSvg = styled.svg`
  width: 30px;
  stroke: #fff;
`;

export const ButtonAddToCart = styled.button`
  margin: 0 10px 0 20px;
  position: relative;
  width: 300px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${colorBlanco};
  background-color: ${colorPrincipal};
  transition: all 0.3s;
  :hover {
    background: ${colorPrincipal};
  }
  :hover > ${ButtonText} {
    color: transparent;
  }
  :hover > ${ButtonIcon} {
    width: 148px;
    transform: translateX(75px);
  }
  :active > ${ButtonIcon} {
    background-color: ${colorPrincipal};
  }
  :active {
    border: 1px solid ${colorPrincipal};
  }
`;

export const ButtonDisabled = styled(ButtonAddToCart)`
  :hover {
    cursor: not-allowed;
  }
  :hover > ${ButtonText} {
    color: ${colorBlanco};
  }
`;

export const DivContainterNameProd = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DivDescuentoInProd = styled(DivDescuento)`
  top: 320px;
  right: 20px;
  height: 30px;
  @media screen and (min-width: 700px) {
    right: 70px;
    top: 15px;
  }
`;

export const DivContainerCuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  gap: 1rem;
  flex-direction: column;
  color: ${colorBlanco};
`;
