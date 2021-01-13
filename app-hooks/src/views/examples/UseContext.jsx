import React from "react";
import PageTitle from "../../components/layout/PageTitle";

import DtaContext from "../../data/DataContext";

const UseContext = (props) => {
  const context = React.useContext(DtaContext);

  function addNumber(delta) {
    context.setStateHook({
      ...context.stateHook,
      number: context.stateHook.number + delta,
    });
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <div className="center">
        <span className="text">{context.stateHook.text}</span>
        <span className="text">{context.stateHook.number}</span>

        <div>
          <button onClick={() => addNumber(1)} className="btn">
            +1
          </button>
          <button onClick={() => addNumber(-1)} className="btn">
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
