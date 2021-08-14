function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById('days');

function createDaysCalendar() {
  for (let day of dezDaysList) {

    const li = document.createElement('li');
    li.innerText = day;
    li.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      li.className += ' holiday';
    }

    if (day === 4 || day === 11 || day === 18 || day == 25) {
      li.className += ' friday';
    }

    ulDays.appendChild(li);
  }
}

createDaysCalendar();


const divButtonsContainer = document.querySelector('.buttons-container');

function createButtonFeriados(string) {
  const buttonFeriados = document.createElement('button');
  buttonFeriados.innerText = string;
  buttonFeriados.id = 'btn-holiday';

  divButtonsContainer.appendChild(buttonFeriados);
}

createButtonFeriados('Feriados');


const holidayDays = document.getElementsByClassName('holiday');

function btnFeriadosClick() {
  let control = 0;
  const buttonFeriados = document.getElementById('btn-holiday');
  buttonFeriados.addEventListener('click', function(){

    for (let holidayDay of holidayDays) {

      holidayDay.style.backgroundColor = 'lightGreen';
      if (control === 1) {
        holidayDay.style.backgroundColor = 'rgb(238,238,238)';
      }
    }
    if (control === 0) {
      control += 1;
    } else {
      control -= 1;
    }
  })
}

btnFeriadosClick();


function createButtonSexta(string) {
  const buttonSexta = document.createElement('button');
  buttonSexta.innerText = string;
  buttonSexta.id = 'btn-friday';

  divButtonsContainer.appendChild(buttonSexta);
}

createButtonSexta('Sexta-feira');


const fridayDays = document.getElementsByClassName('friday');

function btnSextaClick() {
  let control = 0;
  const buttonSexta = document.getElementById('btn-friday');
  buttonSexta.addEventListener('click', function(){

    for (let fridayDay of fridayDays) {

      fridayDay.style.color = 'red';
      if (control === 1) {
        fridayDay.style.color = '#777';
      }
    }
    if (control === 0) {
      control += 1;
    } else {
      control -= 1;
    }
  })
}

btnSextaClick();