import { ThemeProvider } from "styled-components";
import { BannerHome } from "./components/BannerHome";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <BannerHome />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
