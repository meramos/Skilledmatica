import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default class OperatorPanel extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    // };

    this.addMirror = this.addMirror.bind(this);
    this.substractMirror = this.substractMirror.bind(this);
    this.multiplyMirror = this.multiplyMirror.bind(this);
    this.divideMirror = this.divideMirror.bind(this);
    this.exponentMirror = this.exponentMirror.bind(this);
  }

  addMirror() {
    var splitEquation = this.props.equation.split('=');
    var leftside = splitEquation[0] + '+';
    var rightside = splitEquation[1] + '+';

    const newEquation = leftside + '=' + rightside;
    this.props.onChangeEquation(newEquation);

    //var newEquation = math.simplify(leftside) + '=' + math.simplify(rightside);
  }

  substractMirror() {
    var splitEquation = this.props.equation.split('=');
    var leftside = splitEquation[0] + '-';
    var rightside = splitEquation[1] + '-';

    const newEquation = leftside + '=' + rightside;
    this.props.onChangeEquation(newEquation);
  }

  multiplyMirror() {
    var splitEquation = this.props.equation.split('=');
    var leftside = '(' + splitEquation[0] + ')*';
    var rightside = '(' + splitEquation[1] + ')*';

    const newEquation = leftside + '=' + rightside;
    this.props.onChangeEquation(newEquation);
  }

  divideMirror() {
    var splitEquation = this.props.equation.split('=');
    var leftside = '(' + splitEquation[0] + ')/';
    var rightside = '(' + splitEquation[1] + ')/';

    const newEquation = leftside + '=' + rightside;
    this.props.onChangeEquation(newEquation);
  }

  exponentMirror() {
    var splitEquation = this.props.equation.split('=');
    var leftside = '(' + splitEquation[0] + ')^';
    var rightside = '(' + splitEquation[1] + ')^';

    const newEquation = leftside + '=' + rightside;
    this.props.onChangeEquation(newEquation);
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
        <AwesomeButton
          type="primary"
          action={this.addMirror}
          style={{ marginRight: '2px' }}
        >
          +
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.substractMirror}
          style={{ marginRight: '2px' }}
        >
          &minus;
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.multiplyMirror}
          style={{ marginRight: '2px' }}
        >
          *
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.divideMirror}
          style={{ marginRight: '2px' }}
        >
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
