import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class OperatorPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      result: '',
    };

    this.addMirror = this.addMirror.bind(this);
    this.substractMirror = this.substractMirror.bind(this);
    this.multiplyMirror = this.multiplyMirror.bind(this);
    this.divideMirror = this.divideMirror.bind(this);
    this.exponentMirror = this.exponentMirror.bind(this);
  }

  addMirror() {
    this.setState(state => ({
      value: state.value + 2,
    }));

    this.props.onChangeEquation('new eq');
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

  exponentMirror() {
    this.setState(state => ({
      value: state.value ^ 2,
    }));
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AwesomeButton type="primary" action={this.addMirror}>
          +
        </AwesomeButton>
        <AwesomeButton type="primary" action={this.substractMirror}>
          &minus;
        </AwesomeButton>
        <AwesomeButton type="primary" action={this.multiplyMirror}>
          &times;
        </AwesomeButton>
        <AwesomeButton type="primary" action={this.divideMirror}>
          &divide;
        </AwesomeButton>
        <AwesomeButton type="primary" action={this.exponentMirror}>
          ^
        </AwesomeButton>
      </div>
    );
  }
}

OperatorPanel.protoTypes = {
  equation: PropTypes.string,
  onChangeEquation: PropTypes.func,
};
