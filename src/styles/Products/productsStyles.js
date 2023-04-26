import styled from "styled-components";

export const DivContainerProducts = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const DivContainerButtons = styled.div`
  width: 100%;
`;

export const LabelStyles = styled.label`
  cursor: pointer;
  font-weight: bold;
  color: grey;
`;

export const DivTalles = styled.div`
  height: ${({ talOpen }) => (talOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const DivCategories = styled.div`
  height: ${({ catOpen }) => (catOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const DivTemporadas = styled.div`
  height: ${({ tempOpen }) => (tempOpen ? "37px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

export const DivFiltered = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 83px;
  background-color: rgb(250, 250, 250);
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${({ filterOpen }) => (filterOpen ? "50px" : "100%")};
  transition: all 0.3s ease-in-out;
  z-index: 1001;
  text-align: center;
`;

export const DivSorted = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 83px;
  background-color: rgb(250, 250, 250);
  position: fixed;
  top: 0px;
  right: 0px;
  left: ${({ sortOpen }) => (sortOpen ? "50px" : "100%")};
  transition: all 0.3s ease-in-out;
  z-index: 1001;
  text-align: center;
`;
