import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

// Pages
import NoPage from "./pages/404";
import {
  Page as LoginPage,
  PATHNAME as LoginPathname,
} from "./pages/login";
import {
  Page as LectureListPage,
  PATHNAME as LectureListPathname,
} from "./pages/admin/lecture/list";
import {
  Page as LectureNewPage,
  PATHNAME as LectureNewPathname,
} from "./pages/admin/lecture/new";

const BASENAME = '/fe-admin-page';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename={BASENAME}>
        <Switch>
          {/* Pages */}
          <Route path={LoginPathname} component={LoginPage} />
          <Route path="/admin/center/list" component={NoPage} />
          <Route path="/admin/center/new" component={NoPage} />
          <Route path={LectureListPathname} component={LectureListPage} />
          <Route path={LectureNewPathname} component={LectureNewPage} />
          <Route path="/admin/images" component={NoPage} />

          {/* Redirects */}
          <Redirect from="/admin/center*" to="/admin/center/list" />
          <Redirect from="/admin/lecture*" to="/admin/lecture/list" />
          <Redirect from="/admin" to="/admin/center" />
          <Redirect from="*" to="/login" />

        </Switch>
      </BrowserRouter>
    );
  }
}

export {
  Routes as default,
  BASENAME
};
