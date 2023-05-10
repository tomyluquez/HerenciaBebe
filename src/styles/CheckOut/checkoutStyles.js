import styled from "styled-components";
import { colorBlanco, colorPrincipal } from "./../generalStyles";
import { ButtonSeeMore } from "../Main/categories.Styles";

export const DivContainerGeneral = styled.div`
  padding-top: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainerCheckout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  width: 100%;
  gap: 2rem;
  & p {
    margin: 0;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  gap: 1rem;

  @media screen and (min-width: 700px) {
    width: 550px;
  }
`;

export const ButtonNext = styled(ButtonSeeMore)`
  height: 30px;
  width: 40%;
  margin: 0;
`;

export const DivProductsSelect = styled.div`
  min-height: 215px;
  width: 350px;
  border: 1px solid ${colorBlanco};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  @media screen and (min-width: 700px) {
    width: 550px;
  }
`;

export const DivContainerAlert = styled.div`
  width: 350px;
  text-align: center;

  @media screen and (min-width: 700px) {
    width: 550px;
  }
`;

export const Alert = styled.p`
  margin: 10px 0;
  border: 1px solid ${colorBlanco};
  color: ${colorBlanco};
  background-color: red;
  padding: 4px 2px;
`;

export const DivContainerProd = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
  margin-bottom: 15px;
  & span {
    color: ${colorBlanco};
  }
`;

export const DivContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const DivContainerSelect = styled.div`
  min-height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  & h6 {
    margin: 2px;
  }
`;

export const FormCupones = styled.form`
  min-height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  text-align: center;
  gap: 1.2rem;
  > span:first-child {
    color: white;
  }
  & button {
    margin: 0;
  }
`;

export const DivContainerDetails = styled.div`
  min-height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  & p {
    margin-bottom: 5px;
  }
`;

export const DivDescuentos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5px;
  & h6 {
    margin: 2px;
  }
`;

export const ButtonFinal = styled(ButtonSeeMore)`
  margin: 0;
  padding: 0;
  position: sticky;
  bottom: 0;
  height: 50px !important;
`;
import { BsFillCheckCircleFill, MdError } from "react-icons/all";

export const ModalOrderFinal = styled.div`
  height: ${({ request }) =>
    request === "creado" || request === "error" ? "100vh" : "450px"};
  display: flex;
  background-color: ${({ request }) => {
    if (request === "creado") return "green";
    else if (request === "error") return "red";
    else return colorBlanco;
  }};
  position: fixed;
  width: ${({ request }) =>
    request === "creado" || request === "error" ? "100%" : "250px"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
  padding: 0 20px;
  min-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  gap: 3rem;
  @media screen and (min-width: 700px) {
    width: ${({ request }) =>
      request === "creado" || request === "error" ? "100%" : "500px"};
  }
`;

export const ModalOrderOK = styled(ModalOrderFinal)`
  height: 100vh;
  width: 100%;
  z-index: 1002;
  background-color: green;
`;

export const CheckOk = styled(BsFillCheckCircleFill)`
  font-size: 7rem;
  color: ${colorBlanco};
`;

export const CheckError = styled(MdError)`
  font-size: 7rem;
  color: red;
`;

export const PModal = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: ${colorBlanco};
`;

export const ButtonLogginModal = styled.button`
  width: 240px;
  padding: 2px
  border-radius: 20px;
  height: 30px;
  border: 1px solid ${colorBlanco};
  background-color: green;
  color: ${colorBlanco};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${colorBlanco};
    color: green;
    border: 1px solid ${colorPrincipal};
  }
`;

export const DivContainerButtonsCO = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  gap: 0.5rem;
`;

export const InputCupones = styled.input`
  width: 80%;
  padding: 5px;
`;
