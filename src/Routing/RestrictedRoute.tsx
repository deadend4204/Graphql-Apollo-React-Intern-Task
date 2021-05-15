import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import GitHubContext from "../Context/gitHubContext";

const RestrictedRoute = ({ component: Component, ...rest }:any) => {
  const location = useLocation();
  const gitHubContext = useContext(GitHubContext);

  if (gitHubContext.checkAuth()) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      </Route>
    );
  } else {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  }
};

export default RestrictedRoute;
