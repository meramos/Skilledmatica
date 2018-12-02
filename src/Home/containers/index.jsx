import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

export default class Home extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
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
          <div>
            <p style={styles.title}>Skilledmatica</p>
            <p> Experiment with solving algebraic equations! </p>
          </div>
          <Link to="/play">
            <AwesomeButton type="primary">Start</AwesomeButton>
          </Link>
          <span style={{ marginTop: '40px' }}>
            <Link to="/bugsReport">Known Bugs</Link>
          </span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '-webkit-fill-available',
    width: '100%',
    backgroundImage: 'url(images/home_bg.jpg)',
    backgroundSize: 'cover',
  },
  title: {
    fontFamily: 'Catamaran',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: '50px',
    color: '#0D1321',
  },
  subtitle: {
    marginBottom: '30px',
  },
};
