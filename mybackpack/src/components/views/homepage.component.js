import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import axios from "axios";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { mergeClasses } from "@material-ui/styles";

// background image
import Background from '../../images/hero/frontenac.jpg'


const useStyles = makeStyles(theme => ({
  heroContent: {
    height: "900px",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "grey",
    backgroundImage: `url(${Background})`,
    // backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    /* Center and scale the image nicely */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: theme.spacing(10, 0, 12),
    // margin: 0,
  },
  hereTitle: {
    backgroundColor: 'rgba(240, 240, 240, 0.1)',
  },
  heroButtons: {
    padding: theme.spacing(50, 0, 0, 0),
    marginTop: theme.spacing(4),
  },
  buttonSize: {
    padding: theme.spacing(3, 6, 3, 6),
    fontSize: "20px"
  },
}));

export default function LandingPage () {

  // call for using styles made above
  const classes = useStyles();

  return(
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <div className={classes.hereTitle}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            My Backpacking List
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
        </div>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button className={classes.buttonSize} variant="contained" color="inherit">
                <Link to={"/list/"}>Check It Out!</Link>
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.buttonSize} variant="contained" color="inherit">
                <Link to={"/user/"}>New User</Link>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>

)};