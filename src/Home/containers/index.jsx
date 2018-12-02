import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';

export default class index extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <p style={styles.title}>Skilledmatica</p>
          <p> Experiment with solving algebraic equations! </p>
        </div>
        <Link to="/play">
          <AwesomeButton type="primary">Start</AwesomeButton>
        </Link>
        <br />
        <Link to="/bugsReport">Known Bugs</Link>
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
    //backgroundImage: 'url(../../home_bg.jpg) noRepeat center center fixed',
    //backgroundSize: 'cover',
    //overflow: 'hidden',
  },
  title: {
    fontStyle: 'italic',
    fontSize: '50px',
    color: '#0D1321',
  },
  subtitle: {
    marginBottom: '30x',
  },
};
