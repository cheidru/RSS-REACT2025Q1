import './App.css'
import Header from "../components/Header";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import React from "react";
import { Props } from "../services/interface"

export default class App extends React.Component<Props> {
  state: Props = {
    searchResult: [],
    searchString: "",
  }

  handleSearchResultChange = (data: [], searchStr: string) => {
    this.setState({
      searchResult: data,
      searchString: searchStr,
    });
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
        </main>
        <Footer />
      </>

      
    )
  }
}

