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
    <Switch>
      <Route path="/" component={Homepage} exact />
      <Route path="/signin" component={SignIn} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route
        path={"/authenticated/dashboard"}
        render={() =>
          auth.currentUser ? <Dashboard /> : <Redirect to="/signin" />
        }
        exact
      />
      <Route
        path={"/authenticated/find"}
        render={() => (auth.currentUser ? <Find /> : <Redirect to="/signin" />)}
        exact
      />
    </Switch>
  );
}

export default App;
