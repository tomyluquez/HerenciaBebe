import { Image } from "@chakra-ui/react";
import { NavBar } from "../../styles/Header/headerStyles";
import Menu from "./Menu";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <NavBar>
        <InputSearch />
        <Image
          src="/herenciasinfondoGrande.png"
          alt="logo herencia"
          width={140}
          height={60}
          onClick={() => navigate("/")}
        />
        <Menu />
      </NavBar>
    </header>
  );
};

export default Header;
