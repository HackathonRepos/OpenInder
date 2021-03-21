import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowKeysReact from 'arrow-keys-react';
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Fade from "react-reveal/Fade";
import Divider from "@material-ui/core/Divider";
import Firebase from "firebase";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "../components/SideDrawer";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

function Find() {

  const classes = useStyles();
  const [increment, setIncrement] = useState(0);
  const [pointer, setPointer] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [projects, setProjects] = useState([]);  
  
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  useEffect(() => {
    let arr = [];
    const docRef = Firebase.firestore().collection("projects");
    docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
    });
    setProjects(arr);
  }, []);

  ArrowKeysReact.config({
    left: () => {
      setIncrement(increment + 1);
      if (pointer > 0) {
        setPointer(pointer - 1)
      } else {
        setPointer(projects.length - 1)
      }
    },
    right: () => {
      setIncrement(increment + 1);
      if (pointer == (projects.length-1)) {
        setPointer(0);
      } else {
        setPointer(pointer + 1)
      };
    },
    down: () => {
      setIncrement(increment + 1);
      if (pointer == (projects.length-1)) {
        setPointer(0);
      } else {
        setPointer(pointer + 1)
      };
    }
  });

  return (
    <div {...ArrowKeysReact.events} className={classes.screen}>
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
          <IconButton onClick={() => {
            setIncrement(increment + 1);
            if (pointer > 0) {
              setPointer(pointer - 1)
            } else {
              setPointer(projects.length - 1)
            }
              
          }}>
            <ArrowBackIcon className={classes.previous} />
          </IconButton>
          {projects.length === 0 ? (
            <div {...ArrowKeysReact.events} style ={{"color":"white", "text-align":"center"}}> 
              <h1>Welcome to OpenInder!</h1>
              <h3>Click a button to get started, and use the arrow keys afterwards. We hope you enjoy your time here!</h3>
              <h3> -The Devs </h3>
            </div>
          ) : (
            <Fade bottom spy={increment}>
              <div className={classes.repoCard}>
                <div className={classes.repoCardHeader}>
                  <Typography variant="h3">{projects[pointer].name}</Typography>
                  <BookmarkIcon className={classes.bookmark} />
                </div>
                <div className={classes.factContent}>
                  <div>
                    <Typography className={classes.description}>
                      {projects[pointer].description}
                    </Typography>
                  </div>
                  <div className={classes.stats}>
                    <Typography className={classes.item}>
                      Author: {projects[pointer].creator}
                    </Typography>
                    <Typography className={classes.item}>
                      Language: {projects[pointer].language}
                    </Typography>
                    <Typography className={classes.item}>
                      Forks: {projects[pointer].forks}
                    </Typography>
                    <Divider style={{ position: "absolute" }} />
                  </div>
                  <div className={classes.bottomFacts}>
                    <Typography className={classes.item}>
                      Issues: {projects[pointer].issues}
                    </Typography>
                    <Typography className={classes.item}>
                      Watchers: {projects[pointer].watchers}
                    </Typography>
                    <Typography className={classes.item}>
                      Subscribers: {projects[pointer].subcscribers}
                    </Typography>
                    <Divider />
                  </div>
                </div>
                <Typography className={classes.repoLink}>
                  Check it out <Link color="#4C3B39" href={projects[pointer].url}>here </Link>!
                </Typography>
              </div>
            </Fade>
          )}
          <IconButton onClick={() => {
            setIncrement(increment + 1);
            if (pointer == (projects.length-1)) {
              setPointer(0)
            } else {
              setPointer(pointer + 1)
            };
            }}>
            <ArrowForwardIcon className={classes.next} />
          </IconButton>
        </div>
        <IconButton onClick={() => {
            setIncrement(increment + 1);
            if (pointer == (projects.length-1)) {
              setPointer(0)
            } else {
              setPointer(pointer + 1)
            };
            }}>
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
