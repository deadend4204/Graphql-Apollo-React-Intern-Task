import React from 'react';
import './App.css';
import GitHubState from "./Context/gitHubState"

import { BrowserRouter as Router, Switch } from "react-router-dom"; 

import Home from "./Components/Home"
import Repo from "./Components/Repo"
import Login from "./Components/Login"
import Auth from "./Components/Auth"
import PrivateRoute from "./Routing/PrivateRoute"
import RestrictedRoute from "./Routing/RestrictedRoute"



function App() {
  return (
    <Router>
      <GitHubState>
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/repo/:id" component={Repo} />
        <RestrictedRoute exact path="/login"  component={Login} />
        <RestrictedRoute exact path="/login/auth" component={Auth} />
      </Switch>
    </div>
    </GitHubState>
    </Router>
  );
}

export default App;
