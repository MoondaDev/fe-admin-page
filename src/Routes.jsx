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
  Page as CenterListPage,
  PATHNAME as CenterListPathname,
} from "./pages/admin/center/list";
import {
  Page as CenterNewPage,
  PATHNAME as CenterNewPathname,
} from "./pages/admin/center/new";

import {
  Page as LectureListPage,
  PATHNAME as LectureListPathname,
} from "./pages/admin/lecture/list";
import {
  Page as LectureNewPage,
  PATHNAME as LectureNewPathname,
} from "./pages/admin/lecture/new";

import {
  Page as ImagesPage,
  PATHNAME as ImagesPathname,
} from "./pages/admin/images";

const BASENAME = '/fe-admin-page';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename={BASENAME}>
        <Switch>
          {/* Pages */}
          <Route path={LoginPathname} component={LoginPage} />

          <Route path={CenterListPathname} component={CenterListPage} />
          <Route path={CenterNewPathname} component={CenterNewPage} />

          <Route path={LectureListPathname} component={LectureListPage} />
          <Route path={LectureNewPathname} component={LectureNewPage} />
          
          <Route path={ImagesPathname} component={ImagesPage} />

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
