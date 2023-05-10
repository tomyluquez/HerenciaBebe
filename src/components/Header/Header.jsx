import { Image } from "@chakra-ui/react";
import { NavBar } from "../../styles/Header/headerStyles";
import Menu from "./Menu";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <header>
      <NavBar logginUser={user.isLogin}>
        <InputSearch />
        <Image
          src="/herenciasinfondoGrande.png"
          alt="logo herencia"
          width={140}
          height={59}
          onClick={() => navigate("/")}
        />
        <Menu user={user} />
      </NavBar>
    </header>
  );
};

export default Header;
