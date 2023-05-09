import { DivContainerFooter } from "../../styles/Footer/footerStyles";
import { useSelector } from "react-redux";
import Contacto from "./Contacto";
import FormasPago from "./FormasPago";
import Envios from "./Envios";

const Footer = () => {
  const { phone, mail, formasPago, instagram, envios } = useSelector(
    (state) => state.datosComercio
  );
  return (
    <DivContainerFooter>
      <Contacto datosContacto={[mail, phone, instagram]} />
      <FormasPago formasPago={formasPago} />
      <Envios envios={envios} />
    </DivContainerFooter>
  );
};

export default Footer;
