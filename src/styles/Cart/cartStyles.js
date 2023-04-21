import styled from "styled-components";
import //   colorBlanco,
//   colorNegro,
//   colorPrincipal,
"../../styles/generalStyles";

export const DivContainerCart = styled.div`
  width: calc(100vw - 130px);
  height: 100vh;
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 0px;
  left: ${({ cartOpen }) => (cartOpen ? "130px" : "100%")};
  right: 0px;
  padding-top: 50px;
  text-align: center;
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;
