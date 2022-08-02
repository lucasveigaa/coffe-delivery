import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import { CheckoutProvider } from "./contexts/CheckoutContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartProvider>
          <CheckoutProvider>
            <ToastContainer autoClose={3000} />
            <Router />
          </CheckoutProvider>
          </CartProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
