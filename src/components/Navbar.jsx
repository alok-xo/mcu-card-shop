import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <ol>
          
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/shop"> Shop </Link>
          </li>
          {/* <li>
            <Link to="/portfolio"> Portfolio </Link>
          </li> */}
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
