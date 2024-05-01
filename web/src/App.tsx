import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Validar from "./pages/email";
import Validacao from "./pages/ValidarEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const theme = {
    primary: "#3CB371",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#fff",
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Cadastro">
            <Cadastro />
          </Route>
          <Route path="/ValidarEmail">
            <Validar />
          </Route>
          <Route path="/ValidacaoEmail">
            <Validacao />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
