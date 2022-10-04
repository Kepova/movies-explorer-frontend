import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn, ...props }) => {
  console.log(loggedIn)
  return (
    <Route>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute; 