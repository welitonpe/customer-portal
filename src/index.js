import React from "react";
import ReactDOM from "react-dom";
import AppContextProvider from "./providers/AppContextProvider";
import "./styles/global.scss";

import App from "./pages/App";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
