import React, { PureComponent } from 'react';

export default class Equation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      equation: '4x + 3 = 2x+1',
    };
  }

  render() {
    const { equation } = this.state;
    return <div>{equation}</div>;
  }
}
