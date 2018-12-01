import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

export default class index extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <p style={styles.title}>Skilledmatica</p>
        <AwesomeButton type="primary">
          <Link to="/play">Start</Link>
        </AwesomeButton>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontStyle: 'italic',
    fontSize: '50px',
    color: '#0D1321',
  },
};
