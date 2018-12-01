import React, { PureComponent } from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';

import Equation from '../components/Equation';
import OperatorPanel from './OperatorPanel';

export default class Play extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      equation: '4x + 3 = 2x+1',
    };

    this.renderPanel = this.renderPanel.bind(this);
  }

  submit() {
    if (this.state.value === 6) {
      this.setState({
        result: 'CORRECT!',
      });
    } else {
      this.setState({
        result: 'INCORRECT, try again',
      });
    }
  }

  renderPanel() {
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

  render() {
    const { equation } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
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
          {this.renderPanel()}
          <div style={{ marginTop: '10px' }}>
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
