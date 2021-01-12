import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = React.useState(1);
  const [factory, setFactory] = React.useState(1);

  // Ex #01
  const Factory_Calculate = (n) => {
    if (parseInt(n) < 0) return -1;
    if (parseInt(n) == 0) return 1;
    return Factory_Calculate(n - 1) * n;
  };

  React.useEffect(() => {
    setFactory(Factory_Calculate(number));
  }, [number]);

  // Ex #02
  const [status, setStatus] = React.useState("ímpar");

  React.useEffect(() => {
    setStatus(number % 2 === 0 ? "Par" : "Ímpar");
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Execício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{factory}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => setNumber(0)} className="btn">
          Reset
        </button>
      </div>

      <SectionTitle title="Execício #02" />
      <div className="center">
        <div>
          <span className="text">Esse número é: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
