import React, { Component } from 'react'

export default class Inputs extends Component {
  render() {
    const {
      handleChange,
      appState,
    } = this.props;
    return (
      <div>
        <fieldset>
          <label>
            Input de texto Teste:
            <input type="text" name="inputText" value={ appState.inputText } onChange={ handleChange } />
          </label>
        </fieldset>
        <label>
          Input de number Teste:
          <input type="number" name="inputNumber" value={ appState.inputNumber } onChange={ handleChange } />
        </label>
        <label>
          <input type="checkbox" name="inputCheckbox" value={ appState.inputCheckbox } onChange={ handleChange } />
          Checkbox Teste
        </label>
      </div>
    )
  }
}
