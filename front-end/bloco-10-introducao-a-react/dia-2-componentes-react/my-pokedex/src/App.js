import './App.css';
import React, {Component} from 'react';
import Pokemon from './components/createPokemon';
import data from './data'

class App extends Component {
  render() {
    
    return (
      <div>
        <header>
          <h1>Pokemon</h1>
        </header>
        <section className="container">
          {data.map((pokemon) => {
            return <Pokemon pokemon={pokemon} />;
          })}
        </section>
      </div>
    );
  }
}

export default App;
