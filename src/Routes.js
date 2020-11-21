import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/Login";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
      </Switch>
    </Router>
  );
}
