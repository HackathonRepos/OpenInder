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
          <div className={classes.previous}>
            <ArrowBackIcon />
          </div>
          <div className={classes.repoCard}>
            <Typography variant="h3">Repository Name</Typography>
            <BookmarkIcon />
          </div>
          <div className={classes.next}>
            <ArrowForwardIcon />
          </div>
        </div>
        <div className={classes.block}>
          <ClearIcon />
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
  swipe: { display: "flex", alignItems: "center" },
  previous: { color: "#F9F8F8" },
  repoCard: { backgroundColor: "#F9F8F8" },
  next: { color: "#F9F8F8" },
  block: { color: "#a95962" },
}));

export default Find;
