import React, { Fragment } from "react";
import Moment from "react-moment";
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
  Link
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  root: {
    width: 550,
    height: 150,
    marginTop: theme.spacing(4),
    boxShadow:"27px 2px 30px -14px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
  },
  media: {
    height: 140,
  },
}));

type gitHubProps = {
    repoName: string,
    repoCreatedAt: Date,
    repoUrl:string,
    repoId:string
  }

const GitHub = ({repoName,repoCreatedAt,repoUrl,repoId}:gitHubProps) => {
    const classes = useStyles();
    return (
        <Fragment>
      <Typography className={classes.home} variant="h4">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >

            <Card className={classes.root}>
              <CardActionArea>
                  <Link href={`/repo/${repoName}`} >
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
                  
                </CardContent>
                </Link>
                
                <Button variant="contained" color="primary" href={repoUrl}>
                  Github Repo Link
                    </Button>
              </CardActionArea>
            </Card>

        </Grid>
      </Typography>
    </Fragment>
    )
}

export default GitHub
