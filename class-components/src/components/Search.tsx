import React from "react";

export default class Search extends React.Component {
  state = {
    isSubmitDisabled: true,
    searchString: '',
    inputFocused: false,
    result: [],
    value: '',
  }
  render() {
    return (
      <>
        <input
        type="text"
        title="Search"
        placeholder="Search API"
        className="search-field"
        onFocus={() => {this.setState({inputFocused: true})}}
        value={this.state.value}
        onChange={(e) => {this.setState({
          isSubmitDisabled: e.target.value.length > 0 ? false: true,
          searchString: e.target.value,
          value: e.target.value,
        })}}
      />
      <button
        type="submit"
        className="btn-submit form__login-btn active"
        disabled={this.state.isSubmitDisabled}
      >
        Search
      </button>
      </>

    )
  }
}
