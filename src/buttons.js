import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  AwesomeButton,
  AwesomeButtonProgress 
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 0, result: ''};

    // This binding is necessary to make `this` work in the callback
    this.addMirror = this.addMirror.bind(this);
    this.substractMirror = this.substractMirror.bind(this);
    this.multiplyMirror = this.multiplyMirror.bind(this);
    this.divideMirror = this.divideMirror.bind(this);
  }

  addMirror() {
    this.setState(state => ({
      value: state.value + 2
    }));
  }

  substractMirror() {
    this.setState(state => ({
      value: state.value - 2
    }));
  }

  multiplyMirror() {
    this.setState(state => ({
      value: state.value * 2
    }));
  }

  divideMirror() {
    this.setState(state => ({
      value: state.value / 2
    }));
  }

  submit(){
    if(this.state.value === 6){
      this.setState(state => ({
        result: "CORRECT!"
      }));
    }
    else{
      this.setState(state => ({
        result: "INCORRECT, try again"
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {this.state.value}
        <AwesomeButton type="primary" action={this.addMirror}>+</AwesomeButton>
        <AwesomeButton type="primary" action={this.substractMirror}>&minus;</AwesomeButton>
        <AwesomeButton type="primary" action={this.multiplyMirror}>&times;</AwesomeButton>
        <AwesomeButton type="primary" action={this.divideMirror}>&divide;</AwesomeButton>
        

        <AwesomeButtonProgress
          type="secondary"
          size="medium"
          action={this.submit}
        >
          Submit
        </AwesomeButtonProgress>


        {this.state.result}
        
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
