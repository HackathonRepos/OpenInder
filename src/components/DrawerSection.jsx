import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

function DrawerSection({ listText, ListIcon, linkText, toggleDrawer, logOut }) {
  const history = useHistory();
  const handleClick = () => {
    if (linkText === "") {
      toggleDrawer();
    } else if (linkText.includes("github")) {
      toggleDrawer();
      window.open("https://github.com/HackathonRepos/OpenInder");
    } else if (logOut) {
      logOut();
    } else {
      toggleDrawer();
      setTimeout(() => {
        history.push(linkText);
      }, 100);
    }
  };
  const classes = useStyles();
  return (
    <div>
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon>
          <ListIcon color="secondary" style={{ color: "#a95962" }} />
        </ListItemIcon>
        <ListItemText href="/signin">{listText}</ListItemText>
      </ListItem>
      <Divider />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({ item: { padding: "25px 0px" } }));

export default DrawerSection;
