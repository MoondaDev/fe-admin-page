import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/Login/index";
import AdminPage from "./pages/admin/index";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    );
  }
}
