import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Fade from "react-reveal/Fade";
import GoogleButton from "react-google-button";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography
      style={{ color: "#4C3B39" }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        OpenInder
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignUp() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={1} sm={4} md={7}>
        <Fade bottom big>
          <WhatshotIcon className={classes.logoImage} />
        </Fade>
      </Grid>
      <Grid item xs={11} sm={8} md={5} component={Paper} elevation={6} square>
        <Fade bottom big>
          <div className={classes.paper}>
            <WhatshotIcon className={classes.logo} />
            <Typography component="h1" variant="h4">
              Sign Up To OpenInder
            </Typography>
            <GoogleButton className={classes.google} type="dark" />
            <form className={classes.form} noValidate>
              <Grid container>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    {"Have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflowY: "hidden",
    backgroundColor: "#4C3B39",
  },
  logoImage: {
    color: "#F9F8F8",
    width: "100%",
    height: "80%",
    marginTop: "50px",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#4C3B39",
    height: "90%",
  },
  logo: {
    margin: theme.spacing(1),
    backgroundColor: "transparent",
    color: "#4C3B39",
    width: "200px",
    height: "200px",
    marginBottom: "20px",
  },
  google: { marginTop: "20px" },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "30px",
  },
}));

export default SignUp;
