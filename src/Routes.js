import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import pLogin from "./pages/login";
import p404 from "./pages/404";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* Pages */}
          <Route path="/login" component={pLogin} />
          <Route path="/admin/center" component={p404} />
          <Route path="/admin/course" component={p404} />
          <Route path="/admin/gallery" component={p404} />

          {/* Redirects */}
          <Redirect from="/admin" to="/admin/center" />
          <Redirect from="*" to="/login" />

        </Switch>
      </Router>
    );
  }
}
