import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Homepage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Find from "./screens/Find";

import firebase from "firebase";

function App() {
  // listens to the state changes and determines if there is a logged in user
  const isLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      // console.log(user);
      return user ? true : false;
    });
  };
  isLoggedIn();
  return (
    // Routes (1 for each page we'll have in the website)
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      {/* <Route
        path={"/authenticated/dashboard"}
        // Check if the path is authenticated (i.e. user logged in), else redirect them to signin page
        render={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/signin" />)}
        exact
      /> */}
      <Route
        path={"/authenticated/find"}
        // Check if the path is authenticated (i.e. user logged in), else redirect them to signin page
        render={() => (isLoggedIn ? <Find /> : <Redirect to="/signin" />)}
        exact
      />
    </Switch>
  );
}

export default App;
