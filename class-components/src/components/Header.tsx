import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header-wrapper'>
          <div className='header-title'>Search SWAPI (The Star Wars API)</div>
        </div>
      </header>
    )
  }
}