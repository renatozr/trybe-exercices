import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image, moreInfo } } = this.props;
    return (
      <div className="pokemon">
        <div className="pokeInfos">
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ `Average weight: ${value} ${measurementUnit}` }</p>
          <a href={ moreInfo }><p>More Info</p></a>
        </div>
        <img className="pokeImg" src={ image } alt={ `Imagem do pokemon ${name}` } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  key: PropTypes.number.isRequired,
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
  }).isRequired
}

export default Pokemon;
