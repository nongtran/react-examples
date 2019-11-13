import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import "./index.css";
import configureStore from "./state/store";

import ErrorBoundary from './components/ErrorBoundary';

const reduxStore = configureStore();

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
  <Router>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
