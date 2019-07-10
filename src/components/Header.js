import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Ranger
      </Link>
      <div className="right menu">
        <Link to="/clients" className="item">
          Clients
        </Link>
      </div>
    </div>
  );
};

export default Header;
