import React from 'react';
import { Props } from '../services/interface';

export default class Spinner extends React.Component<Props> {
  render() {
    console.log('this.props.spinnerActive = ', this.props.spinnerActive);
    return (
      <div className="spinner-wrapper">
        {this.props.children}
        <div
          className="spinner-container"
          style={{ display: this.props.spinnerActive ? 'flex' : 'none' }}
        >
          <div className="spinner-element"></div>
          <div className="spinner-element"></div>
          <div className="spinner-element"></div>
        </div>
      </div>
    );
  }
}
