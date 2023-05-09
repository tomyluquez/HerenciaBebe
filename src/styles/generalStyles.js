import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const colorPrincipal = "#BDAD9B";
export const colorPpalOscuro = "#aa8e70";
export const colorBlanco = "#fafafa";
export const colorNegro = "black";

export const GeneralStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family:'montserrat alternates';
        overflow-x: hidden;
        background-color: ${colorPrincipal};
        height: 100%;
        min-height: 100vh;
    }
    li{
        list-style-type: none;
    }
    ul{
        padding: 0;
    }
    a{
      text-decoration: none;
    }
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
    }
    input[type="radio"] {
      position: absolute;
      opacity: 0;
    }
    
    label {
      display: inline-block;
      padding: 0.5rem;
      border: 1px solid #ccc;
      background-color: #fff;
      cursor: pointer;
      width: 200px;
    }
    
    label:hover {
      background-color: #f5f5f5;
    }
    
    input[type="checkbox"]:checked + label {
      background-color: ${colorPrincipal};
      color: ${colorBlanco}
    }
    input[type="radio"]:checked + label {
      background-color: ${colorPrincipal};
      color: ${colorBlanco}
    }
`;

export const ShadowOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100%;
  margin-top: ${({ menuOpen, searchOpen, filtersOpen, sortOpen }) =>
    menuOpen || searchOpen || filtersOpen || sortOpen ? "86px" : "0px"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const DivButtonWhats = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colorPrincipal};
  border: 1px solid ${colorBlanco};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  img {
    width: 40px;
    height: 40px;
  }
`;
