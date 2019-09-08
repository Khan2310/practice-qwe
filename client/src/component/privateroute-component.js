import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";

function PrivateRoute({ component: Component, ...remainingProps }) {
  return (
    <Route
      {...remainingProps}
      render={props =>
        localStorage.getItem("userData") === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
