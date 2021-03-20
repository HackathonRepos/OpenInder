import React from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/core/styles";

import Roll from "react-reveal/Roll";

const useStyles = makeStyles((theme) => ({
  screen: {
    height: "100vh",
    backgroundColor: "#4C3B39",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F8F8",
    padding: "70px",
    borderRadius: "10%",
    borderTop: "10px solid #a95962",
    boxShadow:
      "box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
  },
  logo: { color: "#4C3B39", width: "50px", height: "50px" },
  logoText: {
    color: "#4C3B39",
    marginBottom: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  signIn: {
    marginBottom: "10px",
    backgroundColor: "#979491",
    "&:hover": {
      backgroundColor: "#716e6b",
      boxShadow:
        "box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    },
  },
  signUp: {
    marginTop: "10px",
    backgroundColor: "#C79399",
    "&:hover": {
      backgroundColor: "#a95962",
      boxShadow:
        "box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    },
  },
}));

function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.screen}>
      <Roll>
        <div className={classes.content}>
          <WhatshotIcon className={classes.logo} />
          <Typography className={classes.logoText} variant="h2">
            OpenInder
          </Typography>
          <Button
            className={classes.signIn}
            variant="contained"
            color="primary"
            href="/signin"
          >
            Sign in to OpenInder
          </Button>
          <Button
            className={classes.signUp}
            variant="contained"
            color="secondary"
            href="signup"
          >
            Sign up to OpenInder
          </Button>
        </div>
      </Roll>
    </div>
  );
}

export default Homepage;
