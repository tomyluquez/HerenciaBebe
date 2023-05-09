import styled from "styled-components";
import { colorPrincipal, colorBlanco } from "../generalStyles";
import { GrLogin, CgProfile } from "react-icons/all";

export const ButtonLoggin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 2.6em;
  line-height: 2.5em;
  position: relative;
  overflow: hidden;
  border: 1px solid ${colorBlanco};
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: ${colorBlanco};
  :before {
    content: "";
    position: absolute;
    z-index: -1;
    background: ${colorBlanco};
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  :hover {
    color: ${colorPrincipal};
  }
  :hover:before {
    top: -30px;
    left: -30px;
  }
  :avtive:before {
    background: ${colorBlanco};
    transition: background 0s;
  }
`;

export const DivModalUser = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;
  width: 250px;
  height: auto;
  padding: 5px 0;
  border: 1px solid black;
  background: ${colorBlanco};
  color: ${colorPrincipal};
  position: absolute;
  top: 60px;
  transition: all 0.3s ease-in-out;
  right: ${({ isDisplay }) => (isDisplay ? "0" : "-100%")};
  display: flex;
  z-index: 5;
`;

export const ButtonLogginModal = styled.button`
  width: 60%;
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

export const DivContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  gap: 0.5rem;
`;

export const SpanModalUser = styled.span`
  text-align: center;
  width: 80%;
  padding: 3px 0px;
  border-bottom: 1px solid ${colorPrincipal};
  cursor: pointer;
`;

export const DivFormLoggin = styled.div`
  &&& {
    padding-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
export const DivForm = styled.div`
  max-width: 400px;
  background: ${colorPrincipal};
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid ${colorPrincipal};
  color: ${colorBlanco};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 16px;
  text-align: center;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
  color: ${colorBlanco};
`;

export const FormContainter = styled.div`
  overflow: hidden;
  border-radius: 8px;
  background-color: ${colorBlanco};
  margin: 1rem 0 0.5rem;
  width: 100%;
`;

export const InputsStyles = styled.input`
  background: none;
  color: ${colorPrincipal};
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  padding: 8px 15px;
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colorPrincipal};
  padding: 16px;
  font-size: 0.85rem;
  background-color: ${colorBlanco};
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  a {
    font-weight: bold;
    color: ${colorPrincipal};
    transition: color 0.3s ease;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const LogOut = styled(CgProfile)`
  font-size: 1.5rem;
  color: ${colorBlanco};
`;

export const LogIn = styled(GrLogin)`
  font-size: 1.5rem;
`;

export const ButtonGoogle = styled.button`
  background-color: ${colorBlanco};
  color: black;
  border: 1px solid ${colorBlanco};
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 50px;
  svg {
    font-size: 2rem;
    display: inline-block;
  }
`;

export const ButtonForm = styled.button`
  background-color: ${colorPrincipal};
  color: ${colorBlanco};
  border: 1px solid ${colorBlanco};
  border-radius: 24px;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 50px;
  hover {
    background-color: ${colorBlanco};
    border: 1px solid ${colorPrincipal};
    color: ${colorPrincipal};
  }
`;

export const SpanErros = styled.span`
  font-size: 0.8rem;
  color: red;
`;
