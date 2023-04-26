import styled from "styled-components";
import { colorBlanco, colorPpalOscuro } from "../generalStyles";

export const DivContainerFooter = styled.footer`
  background-color: ${colorPpalOscuro};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  padding: 10px 0 40px 20px;
  margin-top: 120px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

export const DivContainerDato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: ${colorBlanco};
  @media screen and (max-width: 700px) {
    align-items: start;
  }
`;

export const DivIconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${colorBlanco};
  cursor: pointer;
  p {
    margin: 0;
  }
  svg {
    font-size: 1.5rem;
  }
`;

export const DivSecundario = styled.div`
  display: flex;
  width: 50%;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 0.8rem;
`;
