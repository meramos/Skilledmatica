import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import Bug from '../../bug.jpg';

export default class index extends PureComponent {
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
          <h1>Bugs</h1>
          <div className="img">
            <img src={Bug} alt="Bug" style={{ width: '200px', height: '200px' }} />
          </div>
          <ol>
            <li>2x-2-2x becomes 2x-2(x+1).</li>
            <li>
              Undo erases parts of equation if clicked beyong a certain point.
            </li>
          </ol>
          <Link to="/">
            <AwesomeButton type="primary">Return to First Screen</AwesomeButton>
          </Link>
        </div>
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
    width: '100%',
    backgroundImage: 'url(images/home_bg.jpg)',
    backgroundSize: 'cover',
  },
};
