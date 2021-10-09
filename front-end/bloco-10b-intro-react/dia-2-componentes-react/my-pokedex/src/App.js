import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data/data';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={ pokemons } />
    </div>
  );
}

export default App;
