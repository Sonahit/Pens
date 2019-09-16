import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.scss";

const root = document.getElementsByTagName("body")[0];

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
