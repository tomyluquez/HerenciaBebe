import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#bdad9b",
        fontFamily: null,
        lineHeight: null,
      },
      "img, svg": {
        height: null,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ChakraProvider theme={theme} resetCSS={false}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </>
);
