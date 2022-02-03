import React, { Component } from 'react'
import './App.css';
import Inputs from './Inputs';

class App extends Component {
  constructor() {
    super();

    this.initialState = {
      select: 'option1',
      inputText: '',
      inputNumber: 0,
      textarea: '',
      inputCheckbox: false,
    }

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  handleSubmit(event) {
    alert('Submit');
    event.preventDefault();
  }

  render() {
    const {
      select,
      textarea,
    } = this.state;
    return (
      <div className="app">
        <h1>Exercícios de Fixação</h1>
        <h2>Formulário Teste</h2>
        <form className="form" onSubmit={ this.handleSubmit }>
          <label>
            Select Teste:
            <select name="select" value={ select } onChange={ this.handleChange }>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <Inputs handleChange={ this.handleChange } appState={ this.state } />
          <label>
            Textarea Teste:
            <textarea name="textarea" value={ textarea } onChange={ this.handleChange } />
          </label>
          <label>
            Input de arquivo Teste:
            <input type="file" />
          </label>
        </form>
      </div>
    )
  }
}

export default App;
