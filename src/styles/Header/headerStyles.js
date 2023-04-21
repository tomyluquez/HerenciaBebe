import styled from "styled-components";
import {
  colorBlanco,
  // colorNegro,
  colorPrincipal,
} from "../../styles/generalStyles";
import { IoMenu, AiOutlineShoppingCart } from "react-icons/all";

export const Info = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${colorBlanco};
  background-color: ${colorBlanco};
  color: ${colorPrincipal};
  font-size: smaller;
  padding: 3px 0;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${colorBlanco};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const MenuSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const UlMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 700px) {
    background-color: ${colorBlanco};
    position: absolute;
    flex-direction: column;
    top: 0px;
    left: ${({ menuOpen }) => (menuOpen ? "130px" : "100%")};
    width: calc(100vw - 130px);
    height: 100vh;
    justify-content: flex-start;
    padding-top: 50px;
    margin: 0;
    z-index: 10;
    & li {
      color: ${colorPrincipal};
      border-bottom: 1px solid ${colorPrincipal};
      width: 150px;
      text-align: center;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 220px;

  @media (max-width: 700px) {
    max-width: fit-content;
  }
`;

export const InputSe = styled.input`
  width: 100%;
  height: 30px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
  }

  :focus,
  :hover {
    outline: none;
    border-color: ${colorPrincipal};
    background-color: #fff;
    box-shadow: 0 0 0 4px ${colorPrincipal};
  }
`;

export const IconSearch = styled.svg`
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 1rem;
  height: 1rem;
`;

export const Hamburger = styled(IoMenu)`
  font-size: 2rem;
  color: ${colorBlanco};
  cursor: pointer;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const IconCart = styled(AiOutlineShoppingCart)`
  font-size: 2rem;
  color: ${colorBlanco};
  cursor: pointer;
  margin-left: 20px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

export const MenuLi = styled.li`
  color: ${colorBlanco};
  cursor: pointer;
  position: relative;

  &:hover::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${colorBlanco};
    animation: slideIn 0.2s forwards;
    transform: translateY(-50%);
  }

  @keyframes slideIn {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;
