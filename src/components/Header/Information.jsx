import { useSelector } from "react-redux";
import { Info } from "../../styles/Header/headerStyles";

const Information = () => {
  const envioGratis = useSelector((state) => state.datosComercio.enviosGratis);
  return <Info>ENVIOS GRATIS A PARTIR DE ${envioGratis}</Info>;
};

export default Information;
