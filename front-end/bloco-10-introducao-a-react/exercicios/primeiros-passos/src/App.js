import React from 'react'
import './App.css';
import Header  from './Header';
import Content from './Content';
import Footer from './Footer';

/* const Task = (value) => {
  let compromissos = ['limpar','varrer','lavar','enxugar','jogar']
  compromissos.push(value)
  return (
    compromissos.map((task) => <li>{task}</li>)
  );
} */

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
