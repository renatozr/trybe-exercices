import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskArr = [
  'Levar o lixo',
  'Estudar no Course',
  'Lavar a louça',
  'Correr na rua',
  'Meditar antes de dormir'
];

function App() {
  return (
    <ol>
      {taskArr.map((task) => Task(task))}
    </ol>
  );
}

export default App;
