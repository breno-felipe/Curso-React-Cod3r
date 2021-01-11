import * as React from "react";
import { useParams } from "react-router-dom";

const Params = (props) => {
  const { id } = useParams();

  return (
    <div className="Params">
      <h1>Parametros</h1>
      <p>Valor {id}!</p>
    </div>
  );
};

export default Params;
