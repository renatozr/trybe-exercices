import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((elm) => (
          <ul className="key">
            <li>O conteudo é: {elm.conteudo}</li>
            <li>Status: {elm.status}</li>
            <li>Bloco: {elm.bloco}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Content;