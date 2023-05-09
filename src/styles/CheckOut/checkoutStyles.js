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
  width: 100%;
  gap: 1rem;
`;

export const ButtonNext = styled(ButtonSeeMore)`
  height: 30px;
  width: 40%;
  margin: 0;
`;

export const DivProductsSelect = styled.div`
  min-height: 215px;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const DivContainerAlert = styled.div`
  width: 90%;
  text-align: center;
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
  flex-direction: column;
  width: 90%;
  text-align: center;
  gap: 0.4rem;
  > span:first-child {
    color: white;
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
  height: 450px;
  display: flex;
  background-color: ${colorBlanco};
  position: fixed;
  max-width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  padding: 0 20px;
  min-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export const CheckOk = styled(BsFillCheckCircleFill)`
  font-size: 7rem;
  color: green;
`;

export const CheckError = styled(MdError)`
  font-size: 7rem;
  color: red;
`;

export const PModal = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const ButtonLogginModal = styled.button`
  width: 80%;
  border-radius: 20px;
  height: 30px;
  border: 1px solid ${colorBlanco};
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: ${colorBlanco};
    color: ${colorPrincipal};
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
