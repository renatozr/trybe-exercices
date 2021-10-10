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
    // this.resetCount = this.resetCount.bind(this);
    // this.addOneClick1 = this.addOneClick1.bind(this);
    // this.addOneClick2 = this.addOneClick2.bind(this);
    // this.addOneClick3 = this.addOneClick3.bind(this);
  }

  changeBtnColor(btn) {
    const numOfClicks = btn.innerText[btn.innerText.length - 1];
    if (numOfClicks % 2 === 0) {
      btn.style.color = 'lightgreen';
      console.log('Verde');
    } else {
      btn.style.color = 'black';
      console.log('Preto');
    }
  }

  addOneClick1(btn) {
    this.setState((prevState) => ({
      numOfClicks1: 1 + prevState.numOfClicks1
    }), () => { this.changeBtnColor(btn) });
  }
  addOneClick2(btn) {
    this.setState((prevState) => ({
      numOfClicks2: 1 + prevState.numOfClicks2
    }), () => { this.changeBtnColor(btn) });
  }
  addOneClick3(btn) {
    this.setState((prevState) => ({
      numOfClicks3: 1 + prevState.numOfClicks3
    }), () => { this.changeBtnColor(btn) });
  }

  resetCount(btn) {
    this.setState({
      numOfClicks1: 0,
      numOfClicks2: 0,
      numOfClicks3: 0
    }, () => {
      const countBtns = btn.parentElement.childNodes;
      countBtns.forEach(btn => {
        this.changeBtnColor(btn);
      });
    });
  }

  handleClick(event) {
    console.log('Clicou!');
    const btn = event.target;
    this[btn.name](btn);
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
