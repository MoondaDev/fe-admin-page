import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/Login/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
