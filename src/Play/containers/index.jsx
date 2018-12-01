import React, { PureComponent } from 'react';
import Equation from '../components/Equation';
import MirrorOperations from '../components/MirrorOperations';

export default class Play extends PureComponent {
  render() {
    return (
      <div className="Play">
        <Equation />
        <MirrorOperations />
      </div>
    );
  }
}
