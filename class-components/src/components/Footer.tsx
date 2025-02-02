import React from "react";

export default class Footer extends React.Component {
  throwError() {
    console.log('Error shoud be thrown');
    throw new Error("Error is generated");
  }
  render() {
    return (
      <footer className='footer'>
        <div className='footer-wrapper'>
          <div className='footer-title'>RSSchool 2025</div>
          <button className="error-btn" onClick={() => this.throwError()}>Throw Error</button>
        </div>
      </footer>
    )
  }
}