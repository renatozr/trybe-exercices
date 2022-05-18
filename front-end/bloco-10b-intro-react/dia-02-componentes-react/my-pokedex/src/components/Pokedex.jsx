import React from "react";
import PropTypes from 'prop-types';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        { pokemons.map(poke => <Pokemon key={ poke.id } pokemon={ poke } />) }
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Pokedex;
