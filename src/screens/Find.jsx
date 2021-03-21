import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";
import Divider from "@material-ui/core/Divider";

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
                <Typography variant="h3">Repository Name</Typography>
                <BookmarkIcon className={classes.bookmark} />
              </div>
              <div>
                <div className={classes.factContent}>
                  <div>
                    <Typography className={classes.description}>
                      This is a description of the repository stating what it
                      does and it is very cool since this hackathon is so cool
                      and I'm trying to make this a decent long description to
                      make sure I can format this safely.
                    </Typography>
                    <Divider />
                  </div>
                  <div className={classes.stats}>
                    <Typography className={classes.item}>
                      Author: Author Name
                    </Typography>
                    <Typography className={classes.item}>
                      Language: Javascript
                    </Typography>
                    <Typography className={classes.item}>
                      Forks: Number of Forks
                    </Typography>
                    <Divider />
                  </div>
                  <div className={classes.bottomFacts}>
                    <Typography className={classes.item}>
                      Issues: Number of Issues
                    </Typography>
                    <Typography className={classes.item}>
                      Watchers: Number of Watchers
                    </Typography>
                    <Typography className={classes.item}>
                      Subscribers: Number of Subscribers
                    </Typography>
                  </div>
                </div>
                <Typography className={classes.repoLink}>
                  Check It out Here !
                </Typography>
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
    color: "#4C3B39",
  },
  swipe: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    width: "100%",
  },
  previous: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  repoCard: {
    position: "relative",
    backgroundColor: "#F9F8F8",
    borderRadius: "10px",
    height: "100%",
    width: "100%",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    borderBottom: "10px solid #a95962",
  },
  repoCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "15px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#a95962",
    color: "#F9F8F8",
  },
  factContent: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
  bookmark: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "35px",
    height: "35px",
  },
  description: { textAlign: "center", marginTop: "25px", marginBottom: "25px" },
  item: { marginRight: "20px" },
  stats: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
    marginBottom: "25px",
  },
  bottomFacts: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
    marginBottom: "25px",
  },
  repoLink: { position: "absolute", top: "95%", right: "1%" },
  next: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  block: { color: "#a95962", width: "50px", height: "50px" },
}));

export default Find;
