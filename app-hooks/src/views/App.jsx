import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Store from "../data/Store";
import DataContext, { state } from "../data/DataContext";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = (props) => {
  const [stateHook, setStateHook] = React.useState(state);

  return (
    <Store>
      <DataContext.Provider
        value={{ stateHook: stateHook, setStateHook: setStateHook }}
      >
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  );
};

export default App;
