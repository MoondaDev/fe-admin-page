import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/Login/index";
import CenterPage from "./pages/admin/Center/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin/center" component={CenterPage} />
      </Switch>
    </Router>
  );
}
