import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Netflix from './Netflix';

class App extends Component {
  render() {
      let movies = [
          {
              name: "Five Guys",
              yearReleased: 2007,
              genre: "comedy"
          },
          {
              name: "SuperMan",
              yearReleased: 2007,
              genre: "Action"
          },
          {
              name: "Bob the Builder",
              yearReleased: 2007,
              genre: "comedy"
          }
      ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Netflix movies={movies}/>
      </div>
    );
  }
}

export default App;
