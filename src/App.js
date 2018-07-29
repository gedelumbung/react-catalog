import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from 'react-loadable';

import FrontendLayout from "./component/Layout/Frontend/Layout";
import Loading from './component/Loading';

const loadAdbleComponent = (component) => (
  Loadable({
    loader: component,
    loading: Loading,
  })
);

const AsyncNotFound = loadAdbleComponent(() => import("./page/NotFound"));
const AsyncHome = loadAdbleComponent(() => import("./page/Home"));

const App = () => (
  <Switch>
    <Route exact path="/" render={() => (
      <FrontendLayout path="" component={AsyncHome} />
    )}/>
    <FrontendLayout exact path="*" component={AsyncNotFound} />
  </Switch>
);

export default App;
