import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";

import firebase from "firebase";

function Find() {
  const classes = useStyles();
  const [increment, setIncrement] = useState(0);
  return (
    <div className={classes.screen}>
      <div className={classes.mainContent}>
        <div className={classes.swipe}>
          <IconButton onClick={() => setIncrement(increment + 1)}>
            <ArrowBackIcon className={classes.previous} />
          </IconButton>
          <Fade spy={increment}>
            <div className={classes.repoCard}>
              <div className={classes.repoCardHeader}>
                <Typography variant="h3" style={{ display: "inline-flex" }}>
                  Repository Name
                </Typography>
                <BookmarkIcon />
              </div>
              <Typography>
                This is a description of the repository stating what it does and
                it is very cooll since this hackathon is so cool and I'm trying
                to make this a decent long description to make sure I can format
                this safely.
              </Typography>
              <Typography>Author: Author Name</Typography>
              <Typography>Language: Javascript</Typography>
              <Typography>Forks: Number of Forks</Typography>
              <Typography>Check It out Here</Typography>
              <div className={classes.bottomFacts}>
                <Typography>Issues: Number of Issues</Typography>
                <Typography>Watchers: Number of Watchers</Typography>
                <Typography>Subscribers: Number of Subscribers</Typography>
              </div>
            </div>
          </Fade>
          <IconButton onClick={() => setIncrement(increment + 1)}>
            <ArrowForwardIcon className={classes.next} />
          </IconButton>
        </div>
        <IconButton onClick={() => setIncrement(increment + 1)}>
          <ClearIcon className={classes.block} />
        </IconButton>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  screen: { backgroundColor: "#4C3B39", height: "100vh" },
  mainContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
  swipe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "100%",
  },
  previous: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  repoCard: {
    backgroundColor: "#F9F8F8",
    borderRadius: "10px",
    height: "100%",
    width: "100%",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px",
  },
  next: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  block: { color: "#a95962", width: "50px", height: "50px" },
  bottomFacts: { display: "flex" },
}));

export default Find;
