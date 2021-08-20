(function createOptionEstado() {
  const selectEstado = document.querySelector('#select-estado');
  
  const arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];
  
  const arrayTextoEstado = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato rosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte','Rondônia', 'Rio Grande do Sul', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  
  for (i = 0; i < arraySiglaEstado.length; i += 1) {
    const options = document.createElement('option');
    options.value = arraySiglaEstado[i];
    options.innerText = arrayTextoEstado[i];
  
    selectEstado.appendChild(options);
  }
})();

// function addDataError() {
//   const dadosDoForm = document.querySelector('#dados-do-form');

//   const erro = document.createElement('h3');
//   erro.innerHTML = 'Dados Inválidos';
//   dadosDoForm.appendChild(erro);
// }

function addDataForm() {
  const dadosDoForm = document.getElementById('dados-do-form');
  if (dadosDoForm.children.length === 2) {
    dadosDoForm.removeChild(dadosDoForm.lastElementChild);
  }
  const dados = document.getElementsByClassName('dado');

  for (let i = 0; i < dados.length; i += 1) {
    const result = document.createElement('p');

    if (dados[i].type === 'radio') {
      if (dados[i].checked) {
        result.innerHTML = `${dados[i].name}: ${dados[i].value}`;
      } else {
        continue;
      }
    } else {
      result.innerHTML = `${dados[i].name}: ${dados[i].value}`;
    }
    dadosDoForm.appendChild(result);
  }
}

// function verifyDateFormat(event) {
//   event.preventDefault();
//   const inputDataInicio = document.querySelector('#input-data-inicio');
//   const stringData = inputDataInicio.value;
  
//   const dateFormat = stringData[2] === '/' && stringData[5] === '/' && stringData.length === 10;
//   const dayFormat = parseInt(stringData.slice(0, 2)) > 0 && parseInt(stringData.slice(0, 2)) <= 31;
//   const monthFormat = parseInt(stringData.slice(3, 5)) > 0 && parseInt(stringData.slice(3, 5)) <= 12;
//   const yearFormat = parseInt(stringData.slice(6, 9)) >= 0;

//   if (!dateFormat) {
//     window.alert('Erro: Formato da data de início deve ser dd/mm/aaaa.');
//   }
//   if (!dayFormat) {
//     window.alert('Erro: O dia da data de início deve estar entre 0 e 31.');
//   }
//   if (!monthFormat) {
//     window.alert('Erro: O mes da data de início deve estar entre 0 e 12.');
//   }
//   if (!yearFormat) {
//     window.alert('Erro: O ano da data de início deve ser positivo.');
//   }
//   if (dateFormat && dayFormat && monthFormat && yearFormat) {
//     addDataForm();
//   } else {
//     addDataError();
//   }
// }
const btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.addEventListener('click', addDataForm);

function clearDataForm() {
  const dadosDoForm = document.getElementById('dados-do-form');

  while (dadosDoForm.children.length !== 1) {
    dadosDoForm.removeChild(dadosDoForm.lastElementChild);
  }
}
const btnLimpar = document.querySelector('#btn-limpar');
btnLimpar.addEventListener('click', clearDataForm);