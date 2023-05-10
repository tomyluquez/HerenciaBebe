import { GeneralStyles } from "./styles/generalStyles.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Information from "./components/Header/Information.jsx";
import MainPage from "./components/Main/MainPage.jsx";
import Shadow from "./components/Shadow.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ButtonWhats from "./components/ButtonWhats.jsx";
import ProductSelected from "./pages/ProductSelected";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import AuthListener from "./components/AuthListener.jsx";
import MisCompras from "./pages/MisCompras.jsx";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DivContainerLoading } from "./styles/Products/productsStyles.js";

function App() {
  const products = useSelector((state) => state.productsState.products);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <DivContainerLoading>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="white"
          size="xl"
        />
      </DivContainerLoading>
    );
  }
  return (
    <>
      <GeneralStyles />
      <Information />
      <Router>
        <Header />
        <Shadow />
        <AuthListener />
        <Routes>
          <Route exact path="/" element={<MainPage products={products} />} />
          <Route exact path="/productos" element={<Products />} />
          <Route
            exact
            path="/productos/:sku"
            element={<ProductSelected products={products} />}
          />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile/:user/misCompras"
            element={<MisCompras user={user} />}
          />
        </Routes>
      </Router>
      <ButtonWhats />
      <Footer />
    </>
  );
}

export default App;
