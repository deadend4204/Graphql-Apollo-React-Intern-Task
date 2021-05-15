import React from 'react'
import {useParams,useHistory} from "react-router-dom"
import { useQuery } from '@apollo/client';
import getRepo from "../Graphql/getRepo"
import RepoShow from './RepoShow';
import {CircularProgress,Grid} from "@material-ui/core"
// import UPDATE_REPO from "../Graphql/updateRepo"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  loading: {
    marginTop: theme.spacing(4),
  },
}));
const Repo = () => {
  
    const {id}:any = useParams();
    const history = useHistory();
    console.log(id);
    if(!id) {
      console.log(id);
      history.push("/")}
    const classes = useStyles();
   const { loading, error, data } = useQuery(getRepo,{variables:{name:id}}); 
    if (loading) return <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  ><CircularProgress className={classes.loading} /></Grid>;
    if (error) return <p>error... ${error.message}</p>;
  
    return (
        <div>
           <RepoShow repoName={data.viewer.repository.name} repoCreatedAt={data.viewer.repository.createdAt} repoUrl={data.viewer.repository.url}  repoDescription={data.viewer.repository.description} />
        </div>
    )
}

export default Repo
