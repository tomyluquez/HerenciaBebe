import { Image } from "@chakra-ui/react";
import { NavBar } from "../../styles/Header/headerStyles";
import Menu from "./Menu";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const logginUser = useSelector((state) => state.user.isLogin);

  return (
    <header>
      <NavBar logginUser={logginUser}>
        <InputSearch />
        <Image
          src="/herenciasinfondoGrande.png"
          alt="logo herencia"
          width={140}
          height={59}
          onClick={() => navigate("/")}
        />
        <Menu logginUser={logginUser} />
      </NavBar>
    </header>
  );
};

export default Header;
