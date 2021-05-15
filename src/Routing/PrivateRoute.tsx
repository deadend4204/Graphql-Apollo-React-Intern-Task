import React, { useContext } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import GitHubContext from "../Context/gitHubContext";

const PrivateRoute = ({ component: Component, ...rest }:any) => {
  const location = useLocation();
  const gitHubContext = useContext(GitHubContext);

  if (gitHubContext.checkAuth()) {
  
    return (
      <Route {...rest} >
        <Component />
      </Route>
    );
  } else {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
};

export default PrivateRoute;
