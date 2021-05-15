import React from 'react'
import GitHubData from "./GitHubData"
import Navbar from "./Navbar"
import {Grid} from "@material-ui/core"
const Home = () => {
 
    return (
        <div>
            <Navbar />
            <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
            <GitHubData />
        </Grid>
        </div>
    )
}

export default Home
