import React from "react";

export default class Footer extends React.Component {
  state = {
    shootError: false,
  }
  throwError() {
    this.setState({shootError: true})
  }

  componentDidUpdate() {
    if(this.state.shootError) {
    console.log('Error is thrown');
    throw new Error("Error is generated");
    }
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