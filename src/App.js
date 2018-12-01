import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './Home/containers';
import Play from './Play/containers';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
        </div>
      </Router>
    );
  }
}

const styles = {
  container: {},
};

export default App;
