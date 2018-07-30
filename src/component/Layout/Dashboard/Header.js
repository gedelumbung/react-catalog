import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar is-inline-flex is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width={112}
            height={28}
            alt="Bulma"
          />
        </Link>
      </div>
      <div className="navbar-menu" />
      <div className="navbar-item is-flex-touch">
        <Link to="/dashboard/products" className="navbar-item">
          <i className="material-icons">grid_on</i> Products Management
        </Link>
        <Link to="/" className="navbar-item">
          <i className="material-icons">highlight_off</i> Log Out
        </Link>
      </div>
    </div>
  );
};

export default Header;
