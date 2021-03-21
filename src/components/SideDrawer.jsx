import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LockIcon from "@material-ui/icons/Lock";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import ListSection from "./DrawerSection";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";

function SideDrawer({ isDrawerOpen, toggleDrawer }) {
  const history = useHistory();
  const classes = useStyles();
  const logOut = () => {
    firebase.auth().signOut();
    history.push("/");
    window.location.reload();
  };
  return (
    <Drawer
      className={classes.drawer}
      open={isDrawerOpen}
      onClose={toggleDrawer}
    >
      <Container className={classes.container}>
        <Divider />
        <ListSection
          listText="CLOSE"
          ListIcon={ChevronLeftIcon}
          linkText=""
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"DASHBOARD"}
          ListIcon={HomeIcon}
          linkText={"/authenticated/dashboard"}
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"FIND A DREAM REPO"}
          ListIcon={PlayArrowIcon}
          linkText="/authenticated/find"
          toggleDrawer={toggleDrawer}
        />
        <ListSection
          listText={"SIGN OUT"}
          ListIcon={LockIcon}
          linkText="/signin"
          toggleDrawer={toggleDrawer}
          logOut={logOut}
        />
        <ListSection
          listText={"Check this project out on Github!"}
          ListIcon={GitHubIcon}
          linkText="https://github.com/Mihir-Achyuta/CalendWar"
          toggleDrawer={toggleDrawer}
        />
      </Container>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
}));

export default SideDrawer;
