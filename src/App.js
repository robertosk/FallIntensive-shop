import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js";
import "bootstrap";
import App from "./layouts/Desktop";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
