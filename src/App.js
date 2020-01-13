import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';

import Home from './Home/containers';
import Play from './Play/containers';
import End from './End/containers';
import BugsReport from './BugsReport/containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // const { width, height } = this.state;
    return (
      <Router>
        <div id="Routes" style={styles.container}>
          <Route path="/" exact component={Home} />
          <Route path="/play" component={Play} />
          <Route path="/end" component={End} />
          <Route path="/bugsReport" component={BugsReport} />
        </div>
      </Router>
    );
  }
}

const styles = {
  container: {
    height: '-webkit-fill-available',
  },
};

export default App;
