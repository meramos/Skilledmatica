import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import ThankYouComeAgain from '../../ThankYouComeAgain.jpg';

export default class index extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <div className="img">
          <img src={ThankYouComeAgain} />
        </div>
        <AwesomeButton type="primary">
          <Link to="/">Return to First Screen</Link>
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
};
