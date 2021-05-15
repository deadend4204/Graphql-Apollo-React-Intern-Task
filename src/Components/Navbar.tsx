import React, { useContext } from "react";
import GitHubContext from "../Context/gitHubContext";

import { Toolbar, AppBar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  login: {
    textDecoration: "none",
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const githubContext = useContext(GitHubContext);
  const onLogout = () => {
    githubContext.logout();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            AppBar
          </Typography>
          { localStorage.git_user && <Button  color="inherit">
              {localStorage.getItem("git_user")?.slice(1,-1)}
            </Button>}
          {githubContext.checkAuth() ? (
            <Button onClick={onLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button color="inherit">
              <Link className={classes.login} to="/login">
                Login
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
