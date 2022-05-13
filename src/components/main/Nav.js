import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="d-flex justify-content-start py-3 px-3 w-100 navigationBar">
        <div className="d-flex">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <p className="px-0 my-0 py-0">Good Morning</p>
          <p className="px-0 my-0 py-0">
            <strong>Fellas</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
