import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfClicks1: 0,
      numOfClicks2: 0,
      numOfClicks3: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.addOneClick1 = this.addOneClick1.bind(this);
    this.addOneClick2 = this.addOneClick2.bind(this);
    this.addOneClick3 = this.addOneClick3.bind(this);
  }

  handleClick(event) {
    console.log('Clicou!');
    this[event.target.name]();
  }

  addOneClick1() {
    this.setState((prevState) => ({
      numOfClicks1: 1 + prevState.numOfClicks1
    }));
  }
  addOneClick2() {
    this.setState((prevState) => ({
      numOfClicks2: 1 + prevState.numOfClicks2
    }));
  }
  addOneClick3() {
    this.setState((prevState) => ({
      numOfClicks3: 1 + prevState.numOfClicks3
    }));
  }

  resetCount() {
    this.setState({
      numOfClicks1: 0,
      numOfClicks2: 0,
      numOfClicks3: 0
    })
  }
  
  render() {
    const { numOfClicks1, numOfClicks2, numOfClicks3 } = this.state;
    return (
      <div className="App">
        <button onClick={ this.handleClick } name="resetCount">Resetar contagens</button>
        <button onClick={ this.handleClick } name="addOneClick1">Número de clicks: { numOfClicks1 }</button>
        <button onClick={ this.handleClick } name="addOneClick2">Número de clicks: { numOfClicks2 }</button>
        <button onClick={ this.handleClick } name="addOneClick3">Número de clicks: { numOfClicks3 }</button>
      </div>
    );
  }
}

export default App;
