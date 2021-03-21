import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";
import Divider from "@material-ui/core/Divider";

<<<<<<< Updated upstream
import Fab from "@material-ui/core/Fab";
import SortIcon from "@material-ui/icons/Sort";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "../components/SideDrawer";
=======
const GithubSearcher = require("github-search-api");

// function gen_projects() {
//   github.searchRepos(params, function(data) {
//     console.log(data)
//     console.log(data.items)
//     console.log(data.items.length);
//     return data.items;
//   });  
//   return [];
// }
console.log("Outside!")

const params = {
  "term": ["open-source", "open source"],
};
const github = new GithubSearcher({username: process.env.GITHUB_USERNAME, password: process.env.GITHUB_PASSWORD});  
>>>>>>> Stashed changes

function Find() {

  var pointer = 0;
  var projects = 0;
  useEffect(() => {
    async() => {
      await github.searchRepos(params, function(data) {
        projects = data.items;
      });
    };
  }, []);

  const classes = useStyles();
  const [increment, setIncrement] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <div className={classes.screen}>
      <Fab color="primary" className={classes.sortIcon}>
        <SortIcon />
      </Fab>
      <Fab
        color="secondary"
        className={classes.menuIcon}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </Fab>
      <SideDrawer isDrawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <div className={classes.mainContent}>
        <div className={classes.swipe}>
          <IconButton onClick={() => setIncrement(increment + 1)}>
            <ArrowBackIcon className={classes.previous} />
          </IconButton>
          <Fade bottom spy={increment}>
            <div className={classes.repoCard}>
              <div className={classes.repoCardHeader}>
                <Typography variant="h3">Repository Name</Typography>
                <BookmarkIcon className={classes.bookmark} />
              </div>
              <div className={classes.factContent}>
                <div>
                  <Typography className={classes.description}>
                    This is a description of the repository stating what it does
                    and it is very cool since this hackathon is so cool and I"m
                    trying to make this a decent long description to make sure I
                    can format this safely.
                  </Typography>
                </div>
                <div className={classes.stats}>
                  <Typography className={classes.item}>
                    Author: John Doe
                  </Typography>
                  <Typography className={classes.item}>
                    Language: Javascript
                  </Typography>
                  <Typography className={classes.item}>
                    Forks: 123432
                  </Typography>
                  <Divider style={{ position: "absolute" }} />
                </div>
                <div className={classes.bottomFacts}>
                  <Typography className={classes.item}>Issues: 213</Typography>
                  <Typography className={classes.item}>
                    Watchers: 3123
                  </Typography>
                  <Typography className={classes.item}>
                    Subscribers: 312312
                  </Typography>
                  <Divider />
                </div>
              </div>
              <Typography className={classes.repoLink}>
                Check It out Here !
              </Typography>
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
  sortIcon: { position: "absolute", top: "2%", left: "95%" },
  menuIcon: { position: "absolute", top: "2%", left: "1%" },
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
    height: "80%",
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
    paddingTop: "20px",
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
    justifyContent: "space-evenly",
  },
  bookmark: {
    position: "absolute",
    top: "0",
    right: "0",
    width: "35px",
    height: "35px",
  },
  description: {
    justifyContent: "center",
    display: "flex",
    marginTop: "25px",
    marginBottom: "25px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  item: {
    fontSize: "30px",
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  stats: {
    display: "flex",
    // justifyContent: "space-around",
    marginTop: "25px",
    marginBottom: "25px",
    width: "100%",
  },
  bottomFacts: {
    display: "flex",
    // justifyContent: "space-evenly",
    paddingLeft: "30px",
    marginTop: "25px",
    marginBottom: "25px",
    width: "100%",
  },
  repoLink: { position: "absolute", top: "95%", left: "2%" },
  next: {
    color: "#F9F8F8",
    width: "75px",
    height: "75px",
  },
  block: { color: "#a95962", width: "50px", height: "50px" },
}));

export default Find;
