import { GeneralStyles, ShadowOverlay } from "./styles/generalStyles.js";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Information from "./components/Header/Information.jsx";
import { toggleCart, toggleHamburger } from "./redux/opens.js";

function App() {
  const menuOpen = useSelector((state) => state.toggleMenues.hamburger);
  const cartOpen = useSelector((state) => state.toggleMenues.cart);

  const dispatch = useDispatch();

  return (
    <>
      {menuOpen && (
        <ShadowOverlay onClick={() => dispatch(toggleHamburger())} />
      )}
      {cartOpen && <ShadowOverlay onClick={() => dispatch(toggleCart())} />}
      <GeneralStyles />
      <Information />
      <Header />
      <Footer />
    </>
  );
}

export default App;
