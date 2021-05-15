import React, { useContext, useEffect } from 'react'
import { useLocation,useHistory } from 'react-router-dom';
import queryString from 'query-string';

import GitHubContext from "../Context/gitHubContext"
import {Typography,Grid,CircularProgress} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  loading: {
    marginTop: theme.spacing(4),
  },
}));

const Auth = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const code = queryString.parse(location.search).code;
    const gitHubContext = useContext(GitHubContext)

    const {login} = gitHubContext

    if(!code) history.push("/login")

    useEffect(() => {
        login(code)
        // eslint-disable-next-line
    },[])
    

    return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
            <Typography className={classes.home}  variant="h4">
             Authorizing...
           </Typography>
           <CircularProgress className={classes.loading} />
        </Grid>
    )
}

export default Auth
