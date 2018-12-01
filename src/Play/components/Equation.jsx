import React, { PureComponent } from 'react';

export default class Equation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { equation } = this.props;
    return <div style={{ color: '#0D1321', fontSize: '40px' }}>{equation}</div>;
  }
}
