import './App.css'
import Header from "../components/Header";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import React from "react";
import { Props, searchData } from "../services/interface"
import ErrorBoundary from "../components/ErrorBoundary.tsx"
export default class App extends React.Component<Props> {
  state: Props = {
    searchResult: [],
    searchString: "",
  }

  handleSearchResultChange = (data: searchData[], searchStr: string) => {
    this.setState({
      searchResult: data,
      searchString: searchStr,
    });
  }

  render() {
    console.log('searchResult =', this.state.searchResult);
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
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>

      </>      
    )
  }
}

