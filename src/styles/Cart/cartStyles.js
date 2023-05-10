import styled from "styled-components";
import { IoCloseOutline } from "react-icons/all";
import { colorPrincipal, colorBlanco } from "../../styles/generalStyles";

export const DivContainerCart = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 83px;
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 0px;
  left: ${({ cartOpen }) => (cartOpen ? "50px" : "100%")};
  right: 0px;
  padding-top: 30px;
  text-align: center;
  z-index: 1001;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ;
  gap: 2rem;
  @media screen and (min-width: 700px) {
    width: 800px;
    left: ${({ cartOpen }) => (cartOpen ? "720px" : "100%")};
  }
`;

export const DivProdInCart = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: scroll;
    max-height: 400px;
    @media screen and (min-width: 700px) {
    max-height: 250px;

    }
}
`;

export const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  top: 5px;
  right: 22px;
  font-size: 1.2rem;
  color: ${colorPrincipal};
  cursor: pointer;
`;

export const DivContainerProduct = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colorPrincipal};
  @media screen and (min-width: 700px) {
    width: 60%;
  }
`;

export const DivContainerImg = styled.div`
  width: 39%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    margin: 0 !important;
  }
  @media screen and (min-width: 700px) {
    width: 35%;
    & img {
      width: 90% !important;
    }
  }
`;

export const DivContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90%;
  & h5 {
    margin-top: 0;
    color: ${colorPrincipal};
  }
`;

export const DivDetails = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.3rem;
`;

export const DivContainerDetailsCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 400px);
  justify-content: start;
  align-items: center;
  gap: 1.4rem;
`;

export const DivContainerEnvios = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colorPrincipal};
  gap: 1.3rem;
  @media screen and (min-width: 700px) {
    height: 300px;
    aling-items: center;
    justify-content: space-around;
  }
`;

export const DivEnvioInd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & span {
    color: ${colorBlanco};
  }
  & svg {
    color: ${colorBlanco};
    font-size: 1.2rem;
  }
`;

export const DivContainerInputEft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  & input {
    width: 80%;
    -webkit-appearance: none;
    background: ${({ porcentaje }) =>
      `linear-gradient(90deg, green ${porcentaje}%, ${colorBlanco} ${porcentaje}%)`};
    border-radius: 10px;
    outline: none;
    height: 12px;
  }
  & input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background-color: green;
    border: 1px solid ${colorBlanco};
    border-radius: 50%;
  }
  & input::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background-color: blue;
    border-radius: 50%;
  }
  @media screen and (min-width: 700px) {
    width: 70%;
  }
`;

export const DivContainerInputTar = styled(DivContainerInputEft)`
  & input {
    background: ${({ porcentaje }) =>
      `linear-gradient(90deg, green ${porcentaje}%, ${colorBlanco} ${porcentaje}%)`};
  }
`;

export const DivPrices = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const ButtonCompra = styled.div`
  width: 40%;
  padding: 5px 10px;
  border: 1px solid ${colorPrincipal};
  background-color: ${colorBlanco};
  color: ${colorPrincipal};
  marging-bottom: 50px;
  cursor: pointer;
  @media screen and (min-width: 700px) {
    width: 180px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const ButtonEndCompra = styled.div`
  width: 40%;
  padding: 5px 10px;
  border: 1px solid ${colorBlanco};
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  marging-bottom: 50px;
  cursor: pointer;
  @media screen and (min-width: 700px) {
    width: 180px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;
