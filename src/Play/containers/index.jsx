import React, { PureComponent } from 'react';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';

import Equation from '../components/Equation';
import OperatorPanel from './OperatorPanel';
import KeypadPanel from './KeypadPanel';

export default class Play extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      start: '4x + 3 = 2x+1',
      equation: '4x + 3 = 2x+1',
      solution: 'x = -1',
      next: undefined,
    };

    this.renderOperatorPanel = this.renderOperatorPanel.bind(this);
    this.renderKeypadPanel = this.renderKeypadPanel.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  submit() {
    if (this.state.equation === this.state.solution) {
      this.setState({
        result: 'CORRECT!',
      });
    } else {
      this.setState({
        result: 'INCORRECT, try again',
      });
    }
  }

  reset() {
    this.setState({ equation: this.state.start });
  }

  renderOperatorPanel() {
    const { equation } = this.state;
    return (
      <OperatorPanel
        equation={equation}
        onChangeEquation={equation => {
          this.setState({ equation });
        }}
      />
    );
  }

  renderKeypadPanel() {
    const { equation } = this.state;
    return (
      <KeypadPanel
        equation={equation}
        onChange={equation => {
          this.setState({ equation });
        }}
      />
    );
  }

  render() {
    const { equation } = this.state;
    return (
      <div
        style={{
          height: '-webkit-fill-available',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Equation equation={equation} />

        <div
          id="Panel"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {this.renderOperatorPanel()}
          {this.renderKeypadPanel()}

          <div style={{ marginTop: '10px' }}>
            <AwesomeButton type="primary" action={this.reset}>
              reset
            </AwesomeButton>

            <AwesomeButtonProgress
              type="secondary"
              size="medium"
              action={this.submit}
            >
              Submit
            </AwesomeButtonProgress>
          </div>
        </div>
      </div>
    );
  }
}
