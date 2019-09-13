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
      start: exercises[0]['equation'], //'4 x + 3 = 2 x + 1',
      equation: exercises[0]['equation'], //'4 x + 3 = 2 x + 1',
      steps: [exercises[0]['equation']],
      next: undefined,
      previous: '-',
      disableOperatorPanel: false,
      disableKeypadPanel: false,
      showInfoModal: false,
      showHintModal: false,
      showStepsModal: false,
      done: false
    };

    this.renderOperatorPanel = this.renderOperatorPanel.bind(this);
    this.renderKeypadPanel = this.renderKeypadPanel.bind(this);
    this.nextExercise = this.nextExercise.bind(this);
    this.reset = this.reset.bind(this);
    this.onOpenInfoModal = this.onOpenInfoModal.bind(this);
    this.onCloseInfoModal = this.onCloseInfoModal.bind(this);
    this.onOpenHintModal = this.onOpenHintModal.bind(this);
    this.onCloseHintModal = this.onCloseHintModal.bind(this);
    this.onOpenStepsModal = this.onOpenStepsModal.bind(this);
    this.onCloseStepsModal = this.onCloseStepsModal.bind(this);
  }

  nextExercise() { 
    const { exerciseNumber } = this.state;
    const index = exerciseNumber + 1;

    if (exercises[index] === undefined) {
      this.setState({
        finished: true,
      });
    } else {
      this.setState({
        exerciseNumber: index,
        start: exercises[index]['equation'],
        equation: exercises[index]['equation'],
        previous: '-',
        steps: [exercises[index]['equation']],
        done: false // NO MORE CONFETTI
      });
    }
  }

  reset() {
    this.setState({ 
      equation: this.state.start,
      previous: '-',
      steps: [this.state.start],
      disableOperatorPanel: false,
      done: false // NO MORE CONFETTI 
    });
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
    const { equation, steps, previous, disableOperatorPanel, done } = this.state;
    return (
      <KeypadPanel
        equation={equation}
        steps={steps}
        previous={previous}
        done={done}
        disableOperatorPanel={disableOperatorPanel}
        onChange={equation => {
          this.setState({ equation });
        }}
        onChangePrevious={previous => {
          this.setState({ previous });
        }}
        onChangeDisabled={disableOperatorPanel => {
          this.setState({ disableOperatorPanel });
        }}
        controlConfetti = {done => {
          this.setState({ done })
        }}
        setSteps = {(newState) => {
          this.setState({ steps: newState})
        }}
        setStepsModal = {(newState) => {
          this.setState({ showStepsModal: newState });
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

  onOpenStepsModal() {
    this.setState({ showStepsModal: true });
  }

  onCloseStepsModal() {
    this.setState({ showStepsModal: false });
  }


  renderIf() {
    if (!exercises.hasOwnProperty((this.state.exerciseNumber + 1).toString())) {
      return <Redirect to="/play" />;
    }
  }

  render() {
    const { equation, previous, showInfoModal, showHintModal, showStepsModal, steps } = this.state;
    return (
      <div style={styles.container}>
        {this.state.finished ? <Redirect to="/end" /> : undefined}
        <div
          style={{
            height: '-webkit-fill-available',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF7F',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              borderRadius: '30px',
            }}
          >
            <Equation equation={equation} previous={previous} />
          </div>

          <div
            id="Panel"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF7F',
              padding: '60px',
              borderRadius: '30px',
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

              <Modal
                open={showStepsModal}
                onClose={this.onCloseStepsModal}
                center
              >
                <h2>You did it! You found x!</h2>
                <p>
                  Here are the steps you followed:
                  <ol>
                  {steps.map((step => <li>{step}</li>))}
                  </ol>
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

const styles = {
  container: {
    height: '-webkit-fill-available',

    width: '100%',
    backgroundImage: 'url(images/home_bg.jpg)',
    backgroundSize: 'cover',
  },
};
