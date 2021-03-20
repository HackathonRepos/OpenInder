import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.css";

import Homepage from "./screens/Homepage";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import Find from "./screens/Find";

import { auth } from "./firebase";

function App() {
  return (
    // Routes (1 for each page we'll have in the website)
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route
        path={"/authenticated/dashboard"}
        // Check if the path is authenticated (i.e. user logged in), else redirect them to signin page
        render={() =>
          auth.currentUser ? <Dashboard /> : <Redirect to="/signin" />
        }
        exact
      />
      <Route
        path={"/authenticated/find"}
        // Check if the path is authenticated (i.e. user logged in), else redirect them to signin page
        render={() => (auth.currentUser ? <Find /> : <Redirect to="/signin" />)}
        exact
      />
    </Switch>
  );
}

export default App;
