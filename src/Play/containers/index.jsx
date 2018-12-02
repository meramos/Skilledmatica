import React, { PureComponent } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import Modal from 'react-responsive-modal';
import { Redirect } from 'react-router-dom';

import Equation from '../components/Equation';
import OperatorPanel from './OperatorPanel';
import KeypadPanel from './KeypadPanel';
import { exercises } from '../../exercises.js';

export default class Play extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      exerciseNumber: 0,
      finished: false,
      start: '4 x + 3 = 2 x + 1',
      equation: '4 x + 3 = 2 x + 1',
      solution: 'x = -1',
      next: undefined,
      previous: '9x+34',
      disableOperatorPanel: false,
      disableKeypadPanel: false,
      showInfoModal: false,
      showHintModal: false,
    };

    this.renderOperatorPanel = this.renderOperatorPanel.bind(this);
    this.renderKeypadPanel = this.renderKeypadPanel.bind(this);
    this.nextExercise = this.nextExercise.bind(this);
    this.reset = this.reset.bind(this);
    this.onOpenInfoModal = this.onOpenInfoModal.bind(this);
    this.onCloseInfoModal = this.onCloseInfoModal.bind(this);
    this.onOpenHintModal = this.onOpenHintModal.bind(this);
    this.onCloseHintModal = this.onCloseHintModal.bind(this);
  }

  nextExercise() {
    const { exerciseNumber } = this.state;
    const index = exerciseNumber + 1;

    if (exercises[index.toString()] === undefined) {
      this.setState({
        finished: true,
      });
    } else {
      this.setState({
        exerciseNumber: index,
        start: exercises[index.toString()]['equation'],
        equation: exercises[index.toString()]['equation'],
      });
    }
  }

  reset() {
    this.setState({ equation: this.state.start });
    this.setState({ disableOperatorPanel: false });
  }

  renderOperatorPanel() {
    const { equation, disableOperatorPanel } = this.state;
    return (
      <OperatorPanel
        equation={equation}
        disableOperatorPanel={disableOperatorPanel}
        onChangeEquation={equation => {
          this.setState({ equation });
        }}
        onChangeDisabled={disableOperatorPanel => {
          this.setState({ disableOperatorPanel });
        }}
      />
    );
  }

  renderKeypadPanel() {
    const { equation, disableOperatorPanel } = this.state;
    return (
      <KeypadPanel
        equation={equation}
        disableOperatorPanel={disableOperatorPanel}
        onChange={equation => {
          this.setState({ equation });
        }}
        onChangeDisabled={disableOperatorPanel => {
          this.setState({ disableOperatorPanel });
        }}
      />
    );
  }

  onOpenInfoModal() {
    this.setState({ showInfoModal: true });
  }

  onCloseInfoModal() {
    this.setState({ showInfoModal: false });
  }

  onOpenHintModal() {
    this.setState({ showHintModal: true });
  }

  onCloseHintModal() {
    this.setState({ showHintModal: false });
  }

  renderIf() {
    if (!exercises.hasOwnProperty((this.state.exerciseNumber + 1).toString())) {
      return <Redirect to="/play" />;
    }
  }

  render() {
    const { equation, previous, showInfoModal, showHintModal } = this.state;
    return (
      <div>
        {this.state.finished ? <Redirect to="/end" /> : undefined}
        <h1> Instructions: Solve for x.</h1>
        <div
          style={{
            height: '-webkit-fill-available',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          {/* <Equation equation={previous} /> */}
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
            <div>
              <AwesomeButton
                type="primary"
                action={this.onOpenInfoModal}
                style={{ marginRight: '2px', fontSize: '30px' }}
              >
                &#9432;
              </AwesomeButton>

              <Modal
                open={showInfoModal}
                onClose={this.onCloseInfoModal}
                center
              >
                <h2>Information</h2>
                <p>
                  <AwesomeButton type="primary" style={{ marginRight: '2px' }}>
                    +
                  </AwesomeButton>
                  : Inserts addition operator at far right of both sides of the
                  equation. <br />
                  <AwesomeButton type="primary" style={{ marginRight: '2px' }}>
                    &minus;
                  </AwesomeButton>
                  : Inserts substraction operator at far right of both sides of
                  the equation. <br />
                  <AwesomeButton type="primary" style={{ marginRight: '2px' }}>
                    *
                  </AwesomeButton>
                  : Inserts multiplication operator at far right of both sides
                  of the equation. <br />
                  <AwesomeButton type="primary" style={{ marginRight: '2px' }}>
                    &divide;
                  </AwesomeButton>
                  : Inserts division operator at far right of both sides of the
                  equation. <br />
                  <AwesomeButton type="primary" style={{ marginRight: '2px' }}>
                    (&minus;)
                  </AwesomeButton>
                  : Negates both sides of the equation.
                </p>
              </Modal>

              <AwesomeButton type="primary" action={this.onOpenHintModal}>
                Hint
              </AwesomeButton>

              <Modal
                open={showHintModal}
                onClose={this.onCloseHintModal}
                center
              >
                <h2>Hint</h2>
                <p>
                  Move terms with x to the left side of the equation, and
                  constants to the right.
                </p>
              </Modal>
            </div>
            <br />
            {this.renderOperatorPanel()}
            {this.renderKeypadPanel()}

            <div style={{ marginTop: '10px' }}>
              <AwesomeButton type="primary" action={this.reset}>
                Reset
              </AwesomeButton>

              <AwesomeButton
                type="secondary"
                size="medium"
                action={this.nextExercise}
              >
                Next Exercise
              </AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
