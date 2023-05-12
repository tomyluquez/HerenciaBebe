import { useDispatch, useSelector } from "react-redux";
import {
  DivInput,
  IconCloseSearch,
  IconSearch,
  IconSearchToggle,
  InputSe,
} from "../../styles/Header/headerStyles";
import { closeMenues, toggleMenues } from "../../redux/opens";
import { useToast } from "@chakra-ui/react";
import { searchProducts } from "../../redux/productsSlice";
import { useNavigate } from "react-router";

const InputSearch = () => {
  const searchOpen = useSelector((state) => state.toggleMenues.search);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    let searchQuery = event.target.value;
    if (!/^[a-zA-Z\s]*$/.test(searchQuery)) {
      toast({
        title: "Error de busqueda",
        description: "Por favor ingresa solo letras ",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      document.getElementById("search").value = "";
      return;
    }
    dispatch(searchProducts(searchQuery));
    navigate("/productos");
    document.getElementById("search").value = "";
    dispatch(toggleMenues("search"));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita que se recargue la página al presionar Enter
      handleSearch(event);
    }
  };

  return (
    <>
      <IconSearchToggle onClick={() => dispatch(toggleMenues("search"))} />
      <DivInput searchOpen={searchOpen}>
        <IconCloseSearch onClick={() => dispatch(closeMenues())} />
        <IconSearch aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </IconSearch>
        <InputSe
          id="search"
          placeholder="Busqueda"
          type="search"
          onSearch={handleSearch}
          onKeyPress={handleKeyPress}
        />
      </DivInput>
    </>
  );
};

export default InputSearch;
