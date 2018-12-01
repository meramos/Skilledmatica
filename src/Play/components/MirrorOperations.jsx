import React, { PureComponent } from 'react';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import '../Play.css';

export default class MirrorOperations extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: 0, result: '' };

    // This binding is necessary to make `this` work in the callback
    this.addMirror = this.addMirror.bind(this);
    this.substractMirror = this.substractMirror.bind(this);
    this.multiplyMirror = this.multiplyMirror.bind(this);
    this.divideMirror = this.divideMirror.bind(this);
    this.submit = this.submit.bind(this);
  }

  addMirror() {
    this.setState(state => ({
      value: state.value + 2,
    }));
  }

  substractMirror() {
    this.setState(state => ({
      value: state.value - 2,
    }));
  }

  multiplyMirror() {
    this.setState(state => ({
      value: state.value * 2,
    }));
  }

  divideMirror() {
    this.setState(state => ({
      value: state.value / 2,
    }));
  }

  submit(next) {
    if (this.state.value === 6) {
      this.setState({
        result: 'CORRECT!',
      });
    } else {
      this.setState({
        result: 'INCORRECT, try again',
      });
    }
    next();
  }

  render() {
    return (
      <div className="MirrorOperations">
        {this.state.value}
        <AwesomeButton type="primary" action={this.addMirror}>
          +
        </AwesomeButton>
        &nbsp;
        <AwesomeButton type="primary" action={this.substractMirror}>
          &minus;
        </AwesomeButton>
        &nbsp;
        <AwesomeButton type="primary" action={this.multiplyMirror}>
          &times;
        </AwesomeButton>
        &nbsp;
        <AwesomeButton type="primary" action={this.divideMirror}>
          &divide;
        </AwesomeButton>
        &nbsp;
        <AwesomeButtonProgress
          type="secondary"
          size="medium"
          action={(element, next) => this.submit(next)}
        >
          Submit
        </AwesomeButtonProgress>
        {this.state.result}
      </div>
    );
  }
}
