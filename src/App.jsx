import { GeneralStyles } from "./styles/generalStyles.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthListener from "./components/AuthListener.jsx";
import { Suspense, lazy } from "react";
import { DivContainerLoading } from "./styles/Products/productsStyles.js";
import { Spinner } from "@chakra-ui/react";

const Products = lazy(() => import("./pages/Products.jsx"));
const Header = lazy(() => import("./components/Header/Header.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));
const Information = lazy(() => import("./components/Header/Information.jsx"));
const MainPage = lazy(() => import("./components/Main/MainPage.jsx"));
const Shadow = lazy(() => import("./components/Shadow.jsx"));
const ButtonWhats = lazy(() => import("./components/ButtonWhats.jsx"));
const ProductSelected = lazy(() => import("./pages/ProductSelected"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const MisCompras = lazy(() => import("./pages/MisCompras.jsx"));

function App() {
  const products = useSelector((state) => state.productsState.products);
  const user = useSelector((state) => state.user);

  return (
    <>
      <Suspense
        fallback={
          <DivContainerLoading>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="white"
              size="xl"
            />
          </DivContainerLoading>
        }
      >
        <GeneralStyles />
        <Information />
        <Router>
          <Header />
          <Shadow />
          <AuthListener />
          <Routes>
            <Route exact path="/" element={<MainPage products={products} />} />
            <Route exact path="/productos" element={<Products />} />
            <Route exact path="/productos/:sku" element={<ProductSelected />} />
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
      </Suspense>
    </>
  );
}

export default App;
