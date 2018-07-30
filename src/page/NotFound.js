import React, { Component, Fragment } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">Not Found</h1>
            <h2 className="subtitle">
              Sorry, but the page you are looking for has note been found. Try
              checking the URL for error, then hit the refresh button on your
              browser or try found something else in our app.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
