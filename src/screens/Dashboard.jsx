import React, { useState } from "react";
import clsx from "clsx";

import Project from "../components/Project";
import firebase from "firebase";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "../components/SideDrawer";

// Dashboard = main page where users can see the projects they're involved in
function Dashboard() {
  const classes = useStyles(); // Imports prementioned CSS
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handlers for menu drawer
  const toggleDrawer = () => {
    setDrawerOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  // Return the main dashboard (React)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fab
        color="secondary"
        className={classes.menuIcon}
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        <MenuIcon />
      </Fab>
      <SideDrawer isDrawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      {/* Puts the drawer in the side of the dashboard */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <header className={classes.header}>
                  {" "}
                  Projects I'm Working On{" "}
                </header>
                <Project
                  className="project"
                  proj_id="project_id"
                  proj_name="project_name"
                />
                {/* <Project className="project" proj_id="project_id" proj_name="project_name"/>
                <Project className="project" proj_id="project_id" proj_name="project_name"/>
                <Project className="project" proj_id="project_id" proj_name="project_name"/>
                <Project className="project" proj_id="project_id" proj_name="project_name"/>
                <Project className="project" proj_id="project_id" proj_name="project_name"/> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <header className={classes.header}>
                  {" "}
                  Projects I'm Interested In{" "}
                </header>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <header className={classes.header}>
                  {" "}
                  Projects I Turned Down{" "}
                </header>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

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

// Use SASS to set up inline CSS for dashboard
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  header: {
    "font-weight": "bold",
    "align-self": "center",
    margin: "10px",
  },
}));

export default Dashboard;
