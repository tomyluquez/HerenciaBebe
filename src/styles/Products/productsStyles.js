import styled from "styled-components";
import { colorBlanco, colorPrincipal } from "../generalStyles";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  BsArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const DivContainerGral = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5rem;
  row-gap: 2rem;
  padding: 0 40px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
`;

export const DivContainerFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  gap: 1.2rem;
  margin-top: 20px;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const DivContainerProd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

export const DivContainerDetailsProd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.3rem;
  width: 100%;
  color: ${colorBlanco};
  position: relative;
  .price {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const DivContainerName = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: start;
  @media screen and (min-width: 700px) {
    height: 40px;
    align-items: center;
  }
`;

export const DivContainerCuotas = styled.div`
  border: 2px solid ${colorBlanco};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DivContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const IconAddCart = styled(MdOutlineAddShoppingCart)`
  font-size: 2rem;
  color: ${colorBlanco};
  position: absolute;
  top: 40px;
  right: 10px;
`;

export const DivContainerProducts = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  gap: 3rem;
`;

export const DivContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    margin: 0;
  }
`;

export const LabelStyles = styled.label`
  cursor: pointer;
  font-weight: bold;
  color: grey;
`;

export const DivTalles = styled.div`
  height: ${({ talOpen }) => (talOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const DivCategories = styled.div`
  height: ${({ catOpen }) => (catOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const DivTemporadas = styled.div`
  height: ${({ tempOpen }) => (tempOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;

export const DivFiltered = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 83px;
  background-color: rgb(250, 250, 250);
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${({ filterOpen }) => (filterOpen ? "50px" : "100%")};
  transition: all 0.3s ease-in-out;
  z-index: 1001;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  & h5 {
    cursor: pointer;
    border-bottom: 1px solid ${colorPrincipal};
  }
  @media screen and (min-width: 700px) {
    width: 800px;
    left: ${({ filterOpen }) => (filterOpen ? "720px" : "100%")};
    & button {
      margin-top: 30px;

      :hover {
        background-color: ${colorPrincipal};
        color: ${colorBlanco};
      }
    }
  }
`;

export const DivSorted = styled.div`
  width: 351px;
  height: ${({ sortOpen }) => (sortOpen ? "150px" : "0")};
  background-color: rgb(250, 250, 250);
  position: fixed;
  top: 200px;
  right: 0;
  left: 0;
  margin: auto;
  transition: all 0.3s ease-in-out;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const ImgProdSelected = styled.img`
  height: 500px;
  width: 390px;
`;

export const DivContainerButton = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 400;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: ${colorPrincipal};
  border-top: 1px solid #252525;
  box-shadow: 0 -5px 6px 0 #252525;
  margin-top: 50px;
  @media screen and (min-width: 700px) {
    height: 80px;
    & button {
      margin: 0;
      
    }
  }
}}
`;

export const DivContainerLoading = styled.div`
  width: 100%;
  padding-top: 83px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgProd = styled(LazyLoadImage)`
  width: 100%;
  height: 213px;
  @media screen and (min-width: 700px) {
    height: 400px;
  }
`;

export const ButtonBack = styled(BsArrowLeftCircleFill)`
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ButtonNext = styled(BsFillArrowRightCircleFill)`
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const DivContainerPaginacion = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const SpanCurrentPage = styled.span`
  padding: 3px;
  position: relative;
  width: 20px;
  background-color: rgb(250, 250, 250);
  color: rgb(189, 173, 155);
  text-align: center;
  border-radius: 50%;
`;

export const DivPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const ButtonSee = styled.button`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 5px 0px;
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  border: 1px solid ${colorBlanco};
`;
