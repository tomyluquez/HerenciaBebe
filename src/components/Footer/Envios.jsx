import {
  DivContainerDato,
  DivIconAndText,
  DivSecundario,
} from "../../styles/Footer/footerStyles";
import { BsTruck } from "react-icons/bs";

const Envios = ({ envios }) => {
  return (
    <DivContainerDato>
      <h3>Envios</h3>
      <DivSecundario>
        <DivIconAndText>
          <BsTruck />
          <p>{envios}</p>
        </DivIconAndText>
      </DivSecundario>
    </DivContainerDato>
  );
};

export default Envios;
