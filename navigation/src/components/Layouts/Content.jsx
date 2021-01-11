import * as React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Params from "../../views/examples/Params";

import "./Styles/Content.css";

const Content = () => {
  return (
    <main className="Content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/params/:id">
          <Params />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
