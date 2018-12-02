import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import ThankYouComeAgain from '../../ThankYouComeAgain.jpg';

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
          <div className="img">
            <img src={ThankYouComeAgain} />
          </div>
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
