import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header-wrapper'>
          <div className='header-title'>Search SWAPI (The Star Wars API)</div>
          <div className='api-endpoints'>Use following endpoints: people, planets, films, species, vehicles, starships</div>
        </div>
      </header>
    )
  }
}