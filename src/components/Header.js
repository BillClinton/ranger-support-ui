import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div class="ui fixed inverted menu">
      <div class="ui container">
        <Link to="/" className="header item">
          Ranger
        </Link>
        <div className="right menu">
          <NavLink to="/jobs" className="item" activeClassName="active">
            Jobs
          </NavLink>
          <NavLink to="/clients" className="item" activeClassName="active">
            Clients
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
