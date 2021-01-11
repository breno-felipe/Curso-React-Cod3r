import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/Layouts/Menu";
import Content from "../components/Layouts/Content";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export default App;
