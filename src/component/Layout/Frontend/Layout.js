import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          <Header/>
          <div className="wrapper">
            <div className="columns">
              <main className="container main">
                <Component {...matchProps} />
              </main>
            </div>
          </div>
        </Fragment>
      )}
    />
  );
};

export default Layout;
