import './App.css';
import Header from '../components/Header';
import Search from '../components/Search';
import Results from '../components/Results';
import Footer from '../components/Footer';
import React from 'react';
import { Props, searchData } from '../services/interface';
import Spinner from '../components/Spinner';
export default class App extends React.Component<Props> {
  state: Props = {
    searchResult: [],
    spinnerActive: true,
  };

  handleSearchResultChange = (data: searchData[], searchStr: string) => {
    this.setState({
      searchResult: data,
      searchString: searchStr,
    });
  };

  turnSpinnerOnOff = (spinnerState: boolean) => {
    this.setState({ spinnerActive: spinnerState });
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Spinner {...{ spinnerActive: this.state.spinnerActive }}>
            <Search
              {...{
                handleSearchResultChange: this.handleSearchResultChange,
                turnSpinnerOnOff: this.turnSpinnerOnOff,
              }}
            />
          </Spinner>

          <Results
            {...{
              searchResult: this.state.searchResult,
            }}
          />
        </main>
        <Footer />
      </>
    );
  }
}
