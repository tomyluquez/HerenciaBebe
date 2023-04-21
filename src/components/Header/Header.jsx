import { Image } from "@chakra-ui/react";
import { NavBar } from "../../styles/Header/headerStyles";
import Menu from "./Menu";
import InputSearch from "./InputSearch";

const Header = () => {
  return (
    <header>
      <NavBar>
        <InputSearch />
        <Image
          src="/herenciasinfondoGrande.png"
          alt="logo herencia"
          width={140}
          height={60}
        />
        <Menu />
      </NavBar>
    </header>
  );
};

export default Header;
