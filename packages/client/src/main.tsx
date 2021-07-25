import React from "react";
import ReactDOM from "react-dom";

import {Provider as ServerProvider} from "~/context/ServerContext";

import Home from "./app/screens/Home/Home";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ServerProvider>
        <Home />
    </ServerProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
