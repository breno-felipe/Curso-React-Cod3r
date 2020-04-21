import React , { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {

  state = {...initialState};

  constructor(props) {
    super(props);
    this.clearMemory = this.clearMemory.bind(this);
    this.hundleAddDigit = this.hundleAddDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState })
  };

  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const finish = operation === "=";
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0]
      }
      
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: finish ? null : operation,
        current: finish ? 0 : 1,
        clearDisplay: finish,
        values,
      })
    }
  };

  hundleAddDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return 
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay; 
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue
      this.setState({ values });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button label="AC" click={this.clearMemory} triple/>
        <Button label="/" click={this.setOperation} operation/>
        <Button label="7" click={this.hundleAddDigit}/>
        <Button label="8" click={this.hundleAddDigit}/>
        <Button label="9" click={this.hundleAddDigit}/>
        <Button label="*" click={this.setOperation} operation/>
        <Button label="4" click={this.hundleAddDigit}/>
        <Button label="5" click={this.hundleAddDigit}/>
        <Button label="6" click={this.hundleAddDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.hundleAddDigit}/>
        <Button label="2" click={this.hundleAddDigit}/>
        <Button label="3" click={this.hundleAddDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.hundleAddDigit} double/>
        <Button label="." click={this.hundleAddDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
};