import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Cria um root React usando ReactDOM.createRoot e o associa ao elemento com id "root" no HTML
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Renderiza o componente App dentro do root criado, envolvendo-o com <React.StrictMode>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Chama a função reportWebVitals para reportar métricas relacionadas ao desempenho da aplicação
reportWebVitals();
