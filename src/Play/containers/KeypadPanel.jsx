import React, { PureComponent } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import PropTypes from 'prop-types';
import * as math from 'mathjs';

import Confetti from 'react-confetti'

export default class KeypadPanel extends PureComponent {
  constructor(props) {
    super(props);

    const { done } = this.props;

    this.state = {
      value: 0,
      result: ''
    };

    console.log("done props = ",this.props.done)
    console.log("done value = ",this.props.done)

    this.appendNumber = this.appendNumber.bind(this);
    this.erase = this.erase.bind(this);
    this.simplify = this.simplify.bind(this);
    //this.undo = this.undo.bind(this);
  }

  appendNumber(number) {
    const { equation, onChange, onChangeDisabled } = this.props;

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0] + number.toString();
    var rightside = splitEquation[1] + number.toString();

    const newEquation = leftside + '=' + rightside;
    onChange(newEquation);
    onChangeDisabled(false);
  }

  erase() {
    const { equation, onChange, onChangeDisabled } = this.props;

    const splitEquation = equation.split('=');
    let leftside = splitEquation[0];
    let rightside = splitEquation[1];

    // store last character before erasing it
    var lastChar = leftside[leftside.length - 1];

    // erase last char
    leftside = leftside.slice(0, -1);
    rightside = rightside.slice(0, -1);

    // If erasing operation, activate operations panel
    if (
      lastChar === '+' ||
      lastChar === '-' ||
      lastChar === '*' ||
      lastChar === '/'
    ) {
      onChangeDisabled(false);
    }

    // if erasing an operation that added parenthesis, remove parenthesis too
    if (lastChar === '*' || lastChar === '/') {
      // erase new last char, and first char
      leftside = leftside.slice(0, -1).substring(1);
      rightside = rightside.slice(0, -1).substring(1);
    }

    const newEquation = leftside + '=' + rightside;

    onChange(newEquation);
  }

  // undo() {
  //   const { previous, onChange, onChangePrevious } = this.props;
  //   onChange(previous);
  //   onChangePrevious('-');
  // }

  simplify() {
    const {
      equation,
      onChange,
      onChangePrevious,
      onChangeDisabled,
      controlConfetti
    } = this.props;

    // this.setState({
    //   done: done
    // })

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0];
    var rightside = splitEquation[1];

    var new_left = math.simplify(leftside);
    var new_right = math.simplify(rightside);
    const newEquation = new_left + '=' + new_right ;


    if((new_left == 'x') || (new_right == 'x')){
      console.log("CELEBRATION!")
      controlConfetti(true)
    }

    if (equation != newEquation) {
      onChangePrevious(equation);
    }
    onChange(newEquation);
    onChangeDisabled(false);

  }

  render() {
    const { done } = this.props;
    let confetti;
    if(done){
      confetti = <Confetti/>
    }

    return (
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>
        {confetti}
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(1)}
          style={{ marginRight: '2px' }}
        >
          1
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(2)}
          style={{ marginRight: '2px' }}
        >
          2
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(3)}
          style={{ marginRight: '2px' }}
        >
          3
        </AwesomeButton>

        <br />

        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(4)}
          style={{ marginRight: '2px' }}
        >
          4
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(5)}
          style={{ marginRight: '2px' }}
        >
          5
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(6)}
          style={{ marginRight: '2px' }}
        >
          6
        </AwesomeButton>

        <br />

        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(7)}
          style={{ marginRight: '2px' }}
        >
          7
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(8)}
          style={{ marginRight: '2px' }}
        >
          8
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(9)}
          style={{ marginRight: '2px' }}
        >
          9
        </AwesomeButton>

        <br />

        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(0)}
          style={{ marginRight: '2px' }}
        >
          0
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber('x')}
          style={{ marginRight: '2px' }}
        >
          x
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={this.addMirror}
          style={{ marginRight: '2px' }}
          disabled={true}
        >
          y
        </AwesomeButton>
        <br />
        <br />

        <AwesomeButton
          type="primary"
          action={this.erase}
          style={{ marginLeft: '2px' }}
        >
          Undo
        </AwesomeButton>

        <AwesomeButton
          type="primary"
          action={this.simplify}
          style={{ marginLeft: '2px' }}
          disabled={this.props.disableOperatorPanel}
        >
          Simplify
        </AwesomeButton>
      </div>
    );
  }
}

KeypadPanel.protoTypes = {
  equation: PropTypes.string,
  previous: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func,
  onChangePrevious: PropTypes.func,
  onChangeDisabled: PropTypes.func,
  controlConfetti: PropTypes.func
};
