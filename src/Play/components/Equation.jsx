import React, { PureComponent } from 'react';

export default class Equation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { equation, previous } = this.props;
    return (
      <div>
        <h1 style={{ color: '#0D1321' }}> Solve for x.</h1>
        <div style={{ color: '#808080', fontSize: '20px' }}>{previous}</div>
        <br />
        <div style={{ color: '#0D1321', fontSize: '40px' }}>{equation}</div>
      </div>
    );
  }
}
