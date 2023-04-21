import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const colorPrincipal = "#BDAD9B";
export const colorBlanco = "#fafafa";
export const colorNegro = "black";

export const GeneralStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family:'montserrat alternates';
        overflow-x: hidden;
        background-color: ${colorPrincipal}
    }
    li{
        list-style-type: none;
    }
    ul{
        padding: 0;
    }
`;

export const ShadowOverlay = styled.div`
  position: fixed;
  z-index: 9;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;
