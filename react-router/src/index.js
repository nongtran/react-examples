import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./state/store";
import App from './App'
import "./index.css";

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
  <Router>
    <App />
  </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
