import React from "react";
import apiSearch from "../services/api";
import { Props } from "../services/interface"
import { readLocalStorage, writeLocalStorage } from "../services/localStoreage"
// import mapResult from "../services/format"

export default class Search extends React.Component<Props> {
  state = {
    value: readLocalStorage()?.replace(/"/g, '') || ''
  }

  async handleClick(searchString: string) {
    writeLocalStorage(JSON.stringify(searchString));
    await apiSearch(searchString).
    then(data => {
      if(this.props.handleSearchResultChange) {
        this.props.handleSearchResultChange(data, searchString);
      }})
  }


  componentDidMount() {
    this.handleClick(this.state.value)
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
        onChange={(e) => this.setState(prev => ({
            ...prev,
            value: e.target.value
          }
        ))}
      />
      <button
        className="btn-submit"
        onClick={() => this.handleClick(this.state.value.trim())}
      > 
        Search
      </button>
    </section>
    )
  }
}
