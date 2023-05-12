import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import styled from "styled-components";
import {
  colorBlanco,
  colorPrincipal,
  colorPpalOscuro,
} from "./../generalStyles";

export const SpanEstado = styled.span`
  color: ${({ estado }) => {
    if (estado === "pendiente") return "red";
    if (estado === "preparado") return "yellow";
    if (estado === "entregado") return "green";
  }};
`;

export const ButtonAcordeonOrder = styled(AccordionButton)`
  border-radius: 30px;
  height: 50px;
  background-color: ${colorBlanco} !important;
  color: ${colorPrincipal} !important;
  cursor: pointer;
  width: 800px;
  :first-child type span {
    display: flex;
    justify-content: space-around;
  }
`;

export const DivContainerDetailProd = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 34px;
  grid-template-areas:
    "FOTO NAME"
    "FOTO CANTIDAD"
    "FOTO TALLE";
  width: 100%;
`;

export const DivAcordeonPanel = styled(AccordionPanel)`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 10px 0 !important;
  color: ${colorBlanco};
  .FOTO {
    grid-area: FOTO;
  }
  .NAME {
    grid-area: NAME;
  }
  .CANTIDAD {
    grid-area: CANTIDAD;
  }
  .TALLE {
    grid-area: TALLE;
  }
  div:first-child {
    width: 100%;
  }
`;

export const ImgProd = styled.img`
  width: 80px;
  height: 80px;
`;

export const AcordeonItem = styled(AccordionItem)`
  background-color: ${colorPpalOscuro};
  border-radius: 30px;
`;

export const DivContainerOrderUser = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Acordion = styled(Accordion)`
  width: 370px;
  @media screen and (min-width: 700px) {
    width: 800px;
  }
`;
