import { GeneralStyles } from "./styles/generalStyles.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Information from "./components/Header/Information.jsx";
import MainPage from "./components/Main/MainPage.jsx";
import Shadow from "./components/Shadow.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ButtonWhats from "./components/ButtonWhats.jsx";

function App() {
  return (
    <>
      <GeneralStyles />
      <Information />
      <Router>
        <Header />
        <Shadow />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/productos" element={<Products />} />
        </Routes>
      </Router>
      <ButtonWhats />
      <Footer />
    </>
  );
}

export default App;
