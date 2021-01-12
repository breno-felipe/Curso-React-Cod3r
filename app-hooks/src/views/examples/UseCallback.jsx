import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./useCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = React.useState(0);

  const inc = React.useCallback(
    (delta) => {
      setCount((current) => current + delta);
    },
    [setCount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
