import React from 'react';
import apiSearch from '../services/api';
import { Props } from '../services/interface';
import { readLocalStorage, writeLocalStorage } from '../services/localStoreage';
// import mapResult from "../services/format"

export default class Search extends React.Component<Props> {
  state = {
    value: readLocalStorage()?.replace(/"/g, '') || '',
  };

  handleClick() {
    writeLocalStorage(JSON.stringify(this.state.value.trim()));
    if (this.props.turnSpinnerOnOff) this.props.turnSpinnerOnOff(true);
    apiSearch(this.state.value.trim()).then((data) => {
      if (this.props.handleSearchResultChange && data) {
        this.props.handleSearchResultChange(data, this.state.value.trim());
      }
    });
    if (this.props.turnSpinnerOnOff) this.props.turnSpinnerOnOff(false);
  }

  componentDidMount() {
    this.handleClick();
  }

  render() {
    return (
      <section className="search-panel">
        <label htmlFor="search-term">Write your API call here</label>
        <input
          type="text"
          title="Search"
          id="search-term"
          className="search-field"
          value={this.state.value}
          onChange={(e) =>
            this.setState((prev) => ({
              ...prev,
              value: e.target.value,
            }))
          }
        />
        <button className="btn-submit" onClick={() => this.handleClick()}>
          Search
        </button>
      </section>
    );
  }
}
