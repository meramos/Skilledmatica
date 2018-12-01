import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class index extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <p>Landing</p>
        <Link to="/play">Play</Link>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    border: '1 blue',
  },
};
