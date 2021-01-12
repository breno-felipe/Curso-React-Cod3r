import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const merge = (str1, str2) => {
  return [...str1]
    .map((e, i) => {
      return `${e}${str2[i] || ""}`;
    })
    .join("");
};

const UseRef = (props) => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const count = React.useRef(0);

  const myInput01 = React.useRef(null);
  const myInput02 = React.useRef(null);

  React.useEffect(() => {
    count.current = count.current + 1;
    myInput02.current.focus();
  }, [value1]);

  React.useEffect(() => {
    count.current = count.current++;
    myInput01.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={myInput01}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={myInput02}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
