import styled from "styled-components";
import { IoCloseOutline } from "react-icons/all";
import { colorPrincipal } from "../../styles/generalStyles";

export const DivContainerCart = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 83px;
  background-color: rgb(250, 250, 250);
  position: absolute;
  top: 0px;
  left: ${({ cartOpen }) => (cartOpen ? "50px" : "100%")};
  right: 0px;
  padding-top: 50px;
  text-align: center;
  z-index: 1001;
  transition: all 0.3s ease-in-out;
`;

export const CloseIcon = styled(IoCloseOutline)`
  position: absolute;
  top: 5px;
  right: 22px;
  font-size: 1.2rem;
  color: ${colorPrincipal};
`;
