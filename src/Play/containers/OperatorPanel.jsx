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
    const { equation, onChangeEquation, onChangeDisabled } = this.props;

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0] + '+';
    var rightside = splitEquation[1] + '+';

    const newEquation = leftside + '=' + rightside;
    onChangeEquation(newEquation);
    onChangeDisabled(true);
  }

  substractMirror() {
    const { equation, onChangeEquation, onChangeDisabled } = this.props;

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0] + '-';
    var rightside = splitEquation[1] + '-';

    const newEquation = leftside + '=' + rightside;
    onChangeEquation(newEquation);
    onChangeDisabled(true);
  }

  multiplyMirror() {
    const { equation, onChangeEquation, onChangeDisabled } = this.props;

    var splitEquation = equation.split('=');
    var leftside = '(' + splitEquation[0] + ')*';
    var rightside = '(' + splitEquation[1] + ')*';

    const newEquation = leftside + '=' + rightside;
    onChangeEquation(newEquation);
    onChangeDisabled(true);
  }

  divideMirror() {
    const { equation, onChangeEquation, onChangeDisabled } = this.props;

    var splitEquation = equation.split('=');
    var leftside = '(' + splitEquation[0] + ')/';
    var rightside = '(' + splitEquation[1] + ')/';

    const newEquation = leftside + '=' + rightside;
    onChangeEquation(newEquation);
    onChangeDisabled(true);
  }

  exponentMirror() {
    const { equation, onChangeEquation, onChangeDisabled } = this.props;
    var splitEquation = equation.split('=');
    var leftside = '(' + splitEquation[0] + ')^';
    var rightside = '(' + splitEquation[1] + ')^';

    const newEquation = leftside + '=' + rightside;
    onChangeEquation(newEquation);
    onChangeDisabled(true);
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
          disabled={this.props.disableOperatorPanel}
        >
          +
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.substractMirror}
          style={{ marginRight: '2px' }}
          disabled={this.props.disableOperatorPanel}
        >
          &minus;
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.multiplyMirror}
          style={{ marginRight: '2px' }}
          disabled={this.props.disableOperatorPanel}
        >
          *
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.divideMirror}
          style={{ marginRight: '2px' }}
          disabled={this.props.disableOperatorPanel}
        >
          &divide;
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.exponentMirror}
          disabled={this.props.disableOperatorPanel}
        >
          ^
        </AwesomeButton>
      </div>
    );
  }
}

OperatorPanel.protoTypes = {
  equation: PropTypes.string,
  disableOperatorPanel: PropTypes.string,
  onChangeEquation: PropTypes.func,
  onChangeDisabled: PropTypes.func,
};
