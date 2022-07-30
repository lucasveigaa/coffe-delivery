import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "./contexts/CartContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartProvider>
            <Router />
          </CartProvider>
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
