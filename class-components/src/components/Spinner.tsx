import React from "react";

export default class Spinner extends React.Component {
  render() {
    return (
      <div className='spinner-wrapper'>
        <div className='spinner-element'></div>
      </div>
    )
  }
}