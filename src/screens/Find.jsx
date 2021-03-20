import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ClearIcon from "@material-ui/icons/Clear";

function Find() {
  const classes = useStyles();
  return (
    <div className={classes.screen}>
      <div className={classes.mainContent}>
        <div className={classes.swipe}>
          <div>
            <ArrowBackIcon className={classes.previous} />
          </div>
          <div className={classes.repoCard}>
            <div className={classes.repoCardHeader}>
              <Typography variant="h3" style={{ display: "inline-flex" }}>
                Repository Name
              </Typography>
              <BookmarkIcon />
            </div>
            <Typography>
              This is a description of the repository stating what it does and
              it is very cooll since this hackathon is so cool and I'm trying to
              make this a decent long description to make sure I can format this
              safely.
            </Typography>
            <Typography>Author: Author Name</Typography>
            <Typography>Language: Javascript</Typography>
            <Typography>Forks: Number of Forks</Typography>
            <Typography>Issues: Number of Issues</Typography>
            <Typography>Watchers: Number of Watchers</Typography>
            <Typography>SUbscribers: Number of Subscribers</Typography>
            <Typography>Check It out Here</Typography>
          </div>
          <div>
            <ArrowForwardIcon className={classes.next} />
          </div>
        </div>
        <div>
          <ClearIcon className={classes.block} />
        </div>
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
  },
  next: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  block: { color: "#a95962", width: "50px", height: "50px", marginTop: "30px" },
}));

export default Find;
