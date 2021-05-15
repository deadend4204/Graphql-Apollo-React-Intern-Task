import React from 'react'
import GitHubLogo from "../githubLogo.png"
import {Button} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    arrow: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        marginTop:theme.spacing(10)
      },
}));
const Login = () => {
    const classes = useStyles();
    return (
        <div className={classes.arrow} >
            <img src={GitHubLogo} alt="gitHub Logo"  />

            <Button variant="contained" color="primary" 
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`} >

                 LOGIN WITH GITHUB
            </Button>
        </div>
    )
}

export default Login
