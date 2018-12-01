import React, { PureComponent } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import PropTypes from 'prop-types';
import * as math from 'mathjs';

export default class KeypadPanel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      result: '',
    };

    this.appendNumber = this.appendNumber.bind(this);
    this.erase = this.erase.bind(this);
    this.enter = this.enter.bind(this);
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
    const { equation, onChange } = this.props;

    const splitEquation = equation.split('=');
    let leftside = splitEquation[0];
    let rightside = splitEquation[1];

    // store last character before erasing it
    var lastChar = leftside[leftside.length - 1];

    // erase last char
    leftside = leftside.slice(0, -1);
    rightside = rightside.slice(0, -1);

    // if erasing an operation that added parenthesis, remove parenthesis too
    if (lastChar === '*' || lastChar === '/' || lastChar === '^') {
      // erase new last char, and first char
      leftside = leftside.slice(0, -1).substring(1);
      rightside = rightside.slice(0, -1).substring(1);
    }

    const newEquation = leftside + '=' + rightside;

    onChange(newEquation);
  }

  enter() {
    const { equation, onChange } = this.props;

    var splitEquation = equation.split('=');
    var leftside = splitEquation[0];
    var rightside = splitEquation[1];
    const newEquation =
      math.simplify(leftside) + '=' + math.simplify(rightside);

    onChange(newEquation);
  }

  render() {
    return (
      <div style={{ marginBottom: '10px', marginTop: '10px' }}>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(0)}
          style={{ marginRight: '2px' }}
        >
          0
        </AwesomeButton>
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
        <br />
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(3)}
          style={{ marginRight: '2px' }}
        >
          3
        </AwesomeButton>
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
        <br />
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(6)}
          style={{ marginRight: '2px' }}
        >
          6
        </AwesomeButton>
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
        <br />
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber(9)}
          style={{ marginRight: '2px' }}
        >
          9
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          action={() => this.appendNumber('x')}
          style={{ marginRight: '2px' }}
        >
          x
        </AwesomeButton>

        <br />

        <AwesomeButton
          type="primary"
          action={this.erase}
          style={{ marginLeft: '2px', fontSize: '30px' }}
        >
          ⏎
        </AwesomeButton>

        <AwesomeButton
          type="primary"
          action={this.enter}
          style={{ marginLeft: '2px', fontSize: '30px' }}
        >
          ▷
        </AwesomeButton>
      </div>
    );
  }
}

KeypadPanel.protoTypes = {
  equation: PropTypes.string,
  onChange: PropTypes.func,
  onChangeDisabled: PropTypes.func,
};
