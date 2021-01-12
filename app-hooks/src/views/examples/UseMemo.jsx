import React from "react";
import PageTitle from "../../components/layout/PageTitle";

const Sum = (a, b) => {
  let future = Date.now() + 2000;
  while (Date.now() < future) {}
  return a + b;
};

const UseMemo = (props) => {
  const [n1, setN1] = React.useState(0);
  const [n2, setN2] = React.useState(0);
  const [n3, setN3] = React.useState(0);

  const result = React.useMemo(() => Sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />

      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <div>
          <span className="text">Resultado: </span>
          <span className="text red">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
