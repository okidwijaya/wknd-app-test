import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="d-flex justify-content-start py-3 px-3 w-100">
        <div className="d-flex">
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="logo"
              style={{ width: "33px", height: "33px", margin: "auto" }}
            />
          </Link>
        </div>
        <div>
          <p className="px-0 my-0 py-0" style={{ fontSize: "16px" }}>
            Good Morning
          </p>
          <p className="px-0 my-0 py-0" style={{ fontSize: "16px" }}>
            <strong>Fellas</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
