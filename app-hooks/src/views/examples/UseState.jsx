import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />

      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button onClick={() => setCount(count + 1)} className="btn">
            +1
          </button>
          <button
            onClick={() => (count === 0 ? "" : setCount(count - 1))}
            className="btn"
          >
            -1
          </button>
          <button onClick={() => setCount(0)} className="btn">
            Reset
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => (
          name === "" ? "" : alert(`Seu nome é ${name}`), setName("")
        )}
        className="btn"
      >
        Ver nome
      </button>
    </div>
  );
};

export default UseState;
