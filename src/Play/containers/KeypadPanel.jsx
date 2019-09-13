import React, { PureComponent } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import PropTypes from 'prop-types';
import * as math from 'mathjs';

import Confetti from 'react-confetti'

export default class KeypadPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      result: ''
    };

    this.appendNumber = this.appendNumber.bind(this);
    this.simplify = this.simplify.bind(this);
    this.undo = this.undo.bind(this);
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

  undo() {
    const {
      steps,
      onChange,
      onChangePrevious,
      onChangeDisabled,
      controlConfetti,
      setSteps
    } = this.props;

    let newEquation = steps[steps.length - 1]; // change equation to the last step
    let newPrevious;
    let reduced_steps;
    
    if(steps.length >= 2){
      newPrevious = steps[steps.length - 2];
      reduced_steps = steps.slice(0, steps.length - 1); // remove last element from steps
    }
    else{
      newPrevious = '-';
      reduced_steps = steps
    }

    onChange(newEquation); 
    onChangePrevious(newPrevious);
    setSteps(reduced_steps);
    
    onChangeDisabled(false);

    controlConfetti(false)
  }

  simplify() {
    const {
      equation,
      steps,
      onChange,
      onChangePrevious,
      onChangeDisabled,
      controlConfetti,
      setSteps,
      setStepsModal
    } = this.props;

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0];
    var rightside = splitEquation[1];

    var new_left = math.simplify(leftside);
    var new_right = math.simplify(rightside);
    const newEquation = new_left + '=' + new_right ;

    if (equation.replace(/\s/g, '') != newEquation.replace(/\s/g, '')) {
      // equation changed
      onChangePrevious(equation);
      onChange(newEquation);
      onChangeDisabled(false);
      setSteps([...steps,equation,newEquation])
    }

    if((new_left == 'x') || (new_right == 'x')){
      // found x, celebrate
      setSteps([...steps,equation,newEquation])
      controlConfetti(true);
      setStepsModal(true);
    }
  }

  render() {
    const { done } = this.props;
    console.log("Props:")
    console.log(this.props.steps)
    return (
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>
        {done ? <Confetti/> : undefined}
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
          action={this.undo}
          style={{ marginLeft: '2px' }}
          disabled={this.props.previous == '-' ? true : false}
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
  steps: PropTypes.array,
  previous: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func,
  onChangePrevious: PropTypes.func,
  onChangeDisabled: PropTypes.func,
  controlConfetti: PropTypes.func,
  setSteps: PropTypes.func,
  setStepsModal: PropTypes.func
};
