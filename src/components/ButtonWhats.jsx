import { useSelector } from "react-redux";
import { DivButtonWhats } from "../styles/generalStyles";

const ButtonWhats = () => {
  const phone = useSelector((state) => state.datosComercio.phone);
  return (
    <a
      href={`http://wa.me/+54${phone}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <DivButtonWhats>
        <img src="./whats.png" alt="" />
      </DivButtonWhats>
    </a>
  );
};

export default ButtonWhats;
