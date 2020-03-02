import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home/home.component";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;
