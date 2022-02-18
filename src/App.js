import { GlobalStyles } from "./styles/Global/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />
        <Home />
        <About />
      </>
    </ThemeProvider>
  );
};

export default App;
