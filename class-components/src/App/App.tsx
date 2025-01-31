import './App.css'
import Header from "../components/Header";
import Search from "../components/Search";
import Results from "../components/Results";
import React from "react";
import { Props } from '../services/interface'

export default class App extends React.Component<Props> {
  state: Props = {
    searchResult: []
  }

  handleSearchResultChange = (data: []) => {
    this.setState({searchResult: data});
  }
  render() {
    return (
      <>
          <Header />
          <main>
            <Search
              {...{handleSearchResultChange: this.handleSearchResultChange}}
            />
            <Results 
              {...{searchResult: this.state.searchResult}}
            />
            <button>Throw Error</button>
          </main>
      </>

      
    )
  }
}

