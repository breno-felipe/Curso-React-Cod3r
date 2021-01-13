import * as React from "react";

export const state = {
  number: 1234,
  text: "Context API...",
};

const DataContext = React.createContext(null);

export default DataContext;
