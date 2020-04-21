import React from 'react';
import './Button.css';

export default props => {
  // props. => Verifica se a propriedade foi passada para o button
  let btnProps = 'button ';
  btnProps += props.triple ? 'triple' : '';
  btnProps += props.double ? 'double' : '';
  btnProps += props.operation ? 'operation' : '';

  return (
    <button
      onClick={() => props.click && props.click(props.label)} 
      className={btnProps}>
      {props.label}
    </button>
  )
}