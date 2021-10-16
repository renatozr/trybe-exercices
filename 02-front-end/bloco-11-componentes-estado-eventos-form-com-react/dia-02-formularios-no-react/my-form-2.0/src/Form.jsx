import React from 'react';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  estados: [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espirito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ],
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.verifyCidade = this.verifyCidade.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type, checked } = target;
    let stateValue = value;

    if (name === 'nome') stateValue = value.toUpperCase();
    if (name === 'endereco') stateValue = this.clearAddress(value);
    if (type === 'checkbox') stateValue = checked;

    this.setState({
      [name]: stateValue,
    })
  }

  clearAddress = (value) => value.replace(/[^\w\s]/gi, '')

  verifyCidade({ target }) {
    const { name, value } = target;
    if (!isNaN(value[0])) {
      this.setState({
        [name]: '',
      })
    }
  }

  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      estados,
    } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="nameInput">Nome: </label>
          <input
            type="text"
            name="nome"
            value={ nome }
            onChange={ this.handleChange }
            id="nameInput"
            maxLength="40"
            required
            autoFocus
          />
          <label htmlFor="emailInput">Email: </label>
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            id="emailInput"
            maxLength="50"
            required
          />
          <label htmlFor="cpfInput">CPF: </label>
          <input
            type="text"
            name="cpf"
            value={ cpf }
            onChange={ this.handleChange }
            id="cpfInput"
            maxLength="11"
            required
          />
          <label htmlFor="enderecoInput">Endereço: </label>
          <input
            type="text"
            name="endereco"
            value={ endereco }
            onChange={ this.handleChange }
            id="enderecoInput"
            maxLength="200"
            required
          />
          <label htmlFor="cidadeInput">Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={ cidade }
            onChange={ this.handleChange }
            id="cidadeInput"
            maxLength="28"
            onBlur={ this.verifyCidade }
            required
          />
          <label htmlFor="estadoSelect">Estado: </label>
          <select name="estado" value={ estado } onChange={ this.handleChange } id="estadoSelect" required>
            {
              estados.map((estado) => <option key={ estado } value={ estado }>{ estado }</option>)
            }
          </select>
          <label htmlFor="tipoInput">Tipo: </label>
          <input
            // type="radio"
            // name="tipo"
            // value={ tipo }
            // onChange={ this.handleChange }
            // id="tipoInput"
            // required
          />
        </fieldset>
      </form>
    );
  }
}

export default Form;
