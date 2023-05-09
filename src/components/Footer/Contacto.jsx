import {
  BsInstagram,
  BsWhatsapp,
  FiPhoneForwarded,
  MdOutlineAlternateEmail,
} from "react-icons/all";
import {
  DivContainerDato,
  DivIconAndText,
  DivSecundario,
} from "../../styles/Footer/footerStyles";

const Contacto = ({ datosContacto: [mail, phone, instagram] }) => {
  return (
    <DivContainerDato>
      <h3>Contacto</h3>
      <DivSecundario>
        <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
          <DivIconAndText>
            <MdOutlineAlternateEmail />
            <p>{mail}</p>
          </DivIconAndText>
        </a>
        <a
          href={`http://wa.me/+54${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DivIconAndText>
            <BsWhatsapp />
            <p>Whatsapp {phone}</p>
          </DivIconAndText>
        </a>
        <a
          href={`http://${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DivIconAndText>
            <BsInstagram />
            <p>Instagram - @herencia.bb</p>
          </DivIconAndText>
        </a>
        <a href={`tel:${phone}`}>
          <DivIconAndText>
            <FiPhoneForwarded />
            <p>Telefono: {phone}</p>
          </DivIconAndText>
        </a>
      </DivSecundario>
    </DivContainerDato>
  );
};

export default Contacto;
