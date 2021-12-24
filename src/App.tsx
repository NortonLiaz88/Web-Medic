import React from "react";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import theme from "./styles/theme";
import AppProvider from "./context";

const App: React.FC = () => {
  return (
    
    <BrowserRouter>
     <ThemeProvider theme={theme}>
        <AppProvider>

        <Routes />
        </AppProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
