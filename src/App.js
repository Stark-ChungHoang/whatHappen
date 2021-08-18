import React from "react";
import { Route,Switch } from "react-router";
import Home from "./page/Home";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
function App() {
  return (
    <>
    <Switch>
          <Route extra path="/login" component={Login} />
          <Route extra path="/signup" component={SignUp} />
        <Route path="" component={Home} />
      </Switch>
    </>
  );
}

export default App;
