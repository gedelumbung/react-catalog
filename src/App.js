import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

import FrontendLayout from "./component/Layout/Frontend/Layout";
import DashboardLayout from "./component/Layout/Dashboard/Layout";
import Loading from "./component/Loading";

const loadAdbleComponent = component =>
  Loadable({
    loader: component,
    loading: Loading
  });

const AsyncNotFound = loadAdbleComponent(() => import("./page/NotFound"));
const AsyncHome = loadAdbleComponent(() => import("./page/Home"));
const AsyncProduct = loadAdbleComponent(() => import("./page/Product"));

const AsyncDashboardHome = loadAdbleComponent(() => import("./page/Dashboard/Home"));
const AsyncDashboardProducts = loadAdbleComponent(() => import("./page/Dashboard/Products"));

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <FrontendLayout path="" component={AsyncHome} />}
    />
    <FrontendLayout exact path="/product/:id" component={AsyncProduct} />
    <DashboardLayout exact path="/dashboard" component={AsyncDashboardHome} />
    <DashboardLayout exact path="/dashboard/products" component={AsyncDashboardProducts} />
    <FrontendLayout exact path="*" component={AsyncNotFound} />
  </Switch>
);

export default App;
