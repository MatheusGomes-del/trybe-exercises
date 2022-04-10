import './App.css';
import React, {Component} from 'react';
import Pokemon from './components/createPokemon';
import data from './data'

class App extends Component {
  
  constructor() {
    super()
    this.FilterPokemons = this.FilterPokemons.bind(this)

    //this.Fire = this.Fire.bind(this)
    
    this.state = {
      filteredType: 'all'
    }
  }
  
   /* Fire(event) {
    this.setState({
       poke: data.filter((bicho) => bicho.type === 'Fire')
    })
    console.log(this.state.poke)
  }  */

  FilterPokemons(event) {
   // const { filteredType } = this.state
    
    /* if(event.target) {
      this.setState({
        filteredType: 'Fire',
      }) */
      <section>
        {data
      .map((pokemon, index) => {
          if (pokemon.type === 'Fire') {
            console.log(pokemon);
            return <Pokemon key={index} pokemon={pokemon} />;
          }
        })}
      </section>
      
      
  }

  render() {
    
    const { poke } = this.state

    return (
      <div>
        <header>
          <h1>Pokemon</h1>
        </header>
        <section className="container">
          
        {data.map((pokemon, index) => {
           return <Pokemon key={index} pokemon={pokemon} />;
        })}
           {/* <Pokemon pokemon={d} /> */}
        </section>
        <button onClick={this.FilterPokemons} className="btns">Fire</button>
        <button onClick={this.FilterPokemons} className='btns'>All</button>
      </div>
    );
  }
}

export default App;
