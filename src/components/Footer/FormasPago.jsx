import { MdOutlineAttachMoney } from "react-icons/md";
import {
  DivContainerDato,
  DivIconAndText,
  DivSecundario,
} from "../../styles/Footer/footerStyles";
import { BiTransfer } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";

const FormasPago = ({ formasPago }) => {
  return (
    <DivContainerDato>
      <h3>Formas de Pago</h3>
      <DivSecundario>
        <DivIconAndText>
          <MdOutlineAttachMoney />
          <p>Efectivo: {formasPago.efectivo}</p>
        </DivIconAndText>
        <DivIconAndText>
          <BiTransfer />
          <p>Transferencia: {formasPago.transferencia}</p>
        </DivIconAndText>
        <DivIconAndText>
          <BsCreditCard />
          <p>Tarjeta de Credito: {formasPago.tarjeta}</p>
        </DivIconAndText>
      </DivSecundario>
    </DivContainerDato>
  );
};

export default FormasPago;
