import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import CenterPage from "./Center/index";

class AdminPage extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Sidebar />
        <section>
          <Switch>
            <Route path="/admin/center" component={CenterPage} />
            <Route path="/admin/course" component={EmptyPage} />
            <Route path="/admin/gallery" component={EmptyPage} />
            <Route path="/admin" component={EmptyPage} />
            <Redirect from="*" to="/admin" />
          </Switch>
        </section>
      </Router>
    );
  }
}

class EmptyPage extends React.Component {
  render() {
    return (
      <>
        404
      </>
    );
  }
}

export default AdminPage;