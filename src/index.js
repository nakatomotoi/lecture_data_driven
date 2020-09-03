import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Edit from "./Edit";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router-dom";
import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Route path="/" exact component={App} />
      <Route path="/edit" exact component={Edit} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
