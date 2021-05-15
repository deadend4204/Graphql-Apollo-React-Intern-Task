import React, { Fragment } from "react";
import Navbar from "./Navbar"
import Moment from "react-moment";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  root: {
    width: 550,
    marginTop: theme.spacing(4),
    cursor: "default",
  },
  media: {
    height: 140,
  },
}));

type RepoShowProps = {
    repoName: string,
    repoCreatedAt: Date,
    repoUrl:string,
    repoDescription:string|null|undefined,
  }

const RepoShow = ({repoName,repoCreatedAt,repoUrl,repoDescription}:RepoShowProps) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Navbar />
            <Typography className={classes.home}  variant="h4">
             Repository Info
           </Typography>
      <Typography className={classes.home} variant="h4">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >

            <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {repoName}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                  >
                  
                    <Moment date={repoCreatedAt} format="D MMM YYYY" />
                  </Typography>
               
                  <Divider />
                  <Typography gutterBottom variant="body1" component="h1">
                    Description
                  </Typography>
                 {repoDescription ? <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {repoDescription}
                  </Typography> : "" } 
             
                <Button style={{margin:"2em 2em 0 0"}} variant="contained" color="primary" href={repoUrl}>
                  Github Repo Link
                    </Button>
                  
                <Button style={{margin:"2em 0 0 2em"}} variant="contained" color="secondary" href={`${repoUrl}/issues`}>
                  Github Issues Link
                    </Button>
                </CardContent>
            </Card>

        </Grid>
      </Typography>
    </Fragment>
    )
}

export default RepoShow
