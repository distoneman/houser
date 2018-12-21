import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header.js'
import { Link } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>
          <Header />
        </span>
        <span>
          <Link to='/'>Dashboard View</Link>
        </span>
          <Link to='/wizard'>Wizard View</Link>

          {routes}
      </div>
    );
  }
}

export default App;
