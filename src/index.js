import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Form";
import ToDo from "./ToDo";
import { register } from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Redirect from="/" to="/login" />
    <Route exact path="/login" component={Login} />
    <Route exact path="/todo" component={ToDo} />
  </Router>,
  document.getElementById("root")
);
register();
