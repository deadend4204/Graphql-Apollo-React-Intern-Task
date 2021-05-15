import React from 'react'
import { useQuery } from '@apollo/client';
import getReposList from "../Graphql/getReposList"
import InfiniteScroll from "react-infinite-scroll-component"
import GitHub from "./GitHub"
import {Typography,CircularProgress} from "@material-ui/core"
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



const GitHubData = () => {
  const classes = useStyles();
    const { loading, error, data,fetchMore } = useQuery(getReposList,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first",variables:{after:null},notifyOnNetworkStatusChange: true,});

    if (loading) return <CircularProgress className={classes.loading} />;
    if (error) return <p>error... ${error.message}</p>;
     
     const fetchMoreRepos = () => {
      fetchMore({
        variables:{after:data.viewer.repositories.pageInfo.endCursor},
      })
     }

    return (
        <div>
           <Typography className={classes.home}  variant="h4">
             Repos List
           </Typography>
          <InfiniteScroll 
          dataLength={data.viewer.repositories.edges.length}
           next={fetchMoreRepos}
            hasMore={data.viewer.repositories.pageInfo.hasNextPage} loader={<CircularProgress className={classes.loading} />}
             endMessage={<p>End</p>} >

       { data.viewer.repositories.edges.map((repo:any,i: any) => {
        //  console.log(repo); 
         return(
         
          <GitHub key={repo.node.id} repoId={repo.node.id} repoName={repo.node.name} repoCreatedAt={repo.node.createdAt} repoUrl={repo.node.url}  />
        
         )
        })
       }

        </InfiniteScroll>
        </div>
    );
}

export default GitHubData
