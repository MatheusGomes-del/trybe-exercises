import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Pokemon extends Component {
  render() {
      const {pokemon} = this.props
      return (
        <div className='squares-poke'>
          <div>
              <p>{pokemon.name}</p>
              <p>{pokemon.type}</p>
              <p>{`Average Weigth: ${pokemon.averageWeight.value.toFixed(1)} kg`}</p>
          </div>
          <img src={pokemon.image} alt="mostra pokemon" />
        </div>
      )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.number,
      image: PropTypes.string,
      
  })
}

export default Pokemon