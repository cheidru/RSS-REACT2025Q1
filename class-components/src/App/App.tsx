import React from "react";
import './App.css'
import Header from "../components/Header";
import Search from "../components/Search";
import Results from "../components/Results";

export default class App extends React.Component {
  render() {
    return (
      <>
          <Header />
          <main>
            <Search />
            <Results />
            <button>Throw Error</button>
          </main>
      </>

      
    )
  }
}

