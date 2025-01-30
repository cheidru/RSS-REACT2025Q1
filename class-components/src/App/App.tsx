import React from "react";
// import './App.css'
import Search from "../components/Search";
import Results from "../components/Results";

export default class App extends React.Component {
  render() {
    return (
      <>
          <h1>Hello World!</h1>
          <Search />
          <Results />
          <button>Throw Error</button>
      </>

      
    )
  }
}

