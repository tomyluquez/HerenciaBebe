import styled from "styled-components";
import {
  colorBlanco,
  // colorNegro,
  colorPrincipal,
} from "../../styles/generalStyles";
import {
  IoMenu,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/all";
import { CloseIcon } from "../Cart/cartStyles";

export const Info = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${colorBlanco};
  background-color: ${colorBlanco};
  color: ${colorPrincipal};
  font-size: smaller;
  padding: 3px 0;
  position: fixed;
  z-index: 1002;
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${colorBlanco};
  background-color: ${colorPrincipal};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 1001;
  position: fixed;
  padding-top: 23px;
  img:first-of-type {
    margin-left: 45px;
    cursor: pointer;
  }
  @media screen and (min-width: 700px) {
    img:first-of-type {
      margin-left: ${({ logginUser }) => (logginUser ? "170px" : "110px;")};
      cursor: pointer;
    }
  }
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
    top: 83px;
    left: 0px;
    width: 100%;
    height: ${({ menuOpen }) => (menuOpen ? "220px" : "0")};
    justify-content: center;
    padding-top: 0px;
    margin: 0;
    z-index: 10;
    overflow: hidden;
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

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 83px;
    left: 0px;
    max-width: 100%;
    width: 100%;
    height: ${({ searchOpen }) => (searchOpen ? "75px" : "0")};
    background-color: ${colorBlanco};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
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
  @media screen and (max-width: 700px) {
    width: 80%;
    border: 2px solid ${colorPrincipal};
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
  @media screen and (max-width: 700px) {
    left: 3.2rem;
  }
`;

export const IconSearchToggle = styled(AiOutlineSearch)`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
    position: relative;
    fill: ${colorBlanco};
    font-size: 2rem;
  }
`;

export const IconCloseSearch = styled(CloseIcon)`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
    font-size: 1.2rem;
  }
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
  transition: all 0.2s ease-in-out;
  position: relative;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 700px) {
    margin-left: 20px;
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

export const SpanCart = styled.span`
  text-align: center;
  vertical-align: inherit;
  position: absolute;
  top: 30px;
  right: 10px;
  background: ${colorPrincipal};
  color: ${colorBlanco};
  padding: 2px 5px;
  border-radius: 50%;
  width: 12px;
  border: 1px solid ${colorBlanco};
  @media screen and (min-width: 700px) {
    right: ${({ logginUser }) => (logginUser ? "90px" : "115px")};
  }
`;
