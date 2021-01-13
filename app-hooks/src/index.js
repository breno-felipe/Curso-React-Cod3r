import "./index.css";
import ReactDOM from "react-dom";
import React from "react";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import DataContext from "./data/DataContext";

ReactDOM.render(
  <DataContext.Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContext.Provider>,
  document.getElementById("root")
);

reportWebVitals();
