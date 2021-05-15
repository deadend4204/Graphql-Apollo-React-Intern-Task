import React from "react";
import GitHubContext from "./gitHubContext";
import queryString from 'query-string';
import {useHistory} from "react-router-dom"
const GitHubState = (props: any) => {

    const history = useHistory();

    const login = (code: Object) => { 
        console.log(code);
          fetch(`https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?code=${code}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`,{method: "POST",headers: {
            "Access-Control-Allow-Origin": "*",
          }})
        .then((resp) => resp.text())
        .then(data => {
         
            const access_token = queryString.parse(data).access_token;
            console.log(access_token);
            localStorage.setItem("git_token",JSON.stringify(access_token));
        //get user's name
        fetch(`https://api.github.com/user`,{method: "POST",headers: {
            "Authorization": `token ${access_token}`,
          }}) 
        .then((resp) => resp.json())
        .then(data => { 
            localStorage.setItem("git_user",JSON.stringify(data.login))
            history.push("/");
         })
           
        })

        
    }
    

    const checkAuth = () => {
        if(!localStorage.getItem("git_token")) return false;
        return true;
    }

    const logout = () => {
        localStorage.removeItem("git_token")
        localStorage.removeItem("git_user")
        history.push("/login")
    }
    
    return (
        <GitHubContext.Provider value={{login,checkAuth,logout}} >
            {props.children}
        </GitHubContext.Provider>
    )

};
export default GitHubState;
