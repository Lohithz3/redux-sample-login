import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Route  from 'react-router-dom/Route';
import Home from './components/HomePage';
import LoginPage from './components/LoginPage';
// import Login from './components/LoginPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact strict component={LoginPage}/>
          <Route path="/home" exact strict component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
