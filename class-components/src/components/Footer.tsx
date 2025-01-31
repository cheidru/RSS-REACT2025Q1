import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer-wrapper'>
          <div className='footer-title'>RSSchool 2025</div>
          <button className="error-btn">Throw Error</button>
        </div>
      </footer>
    )
  }
}