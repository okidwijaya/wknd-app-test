import React from "react";
import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        <p>Go to Home!</p>
      </Link>
    </div>
  );
};
