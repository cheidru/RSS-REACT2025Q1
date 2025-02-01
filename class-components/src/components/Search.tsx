import React from "react";
import apiSearch from "../services/api";
import { Props, searchData } from "../services/interface"
import { readLocalStorage, writeLocalStorage } from "../services/localStoreage"
import formatResult from "../services/format"


export default class Search extends React.Component<Props> {
  state = {
    isSubmitDisabled: true,
    searchString: '',
    inputFocused: false,
    result: [],
    value: readLocalStorage()?.replace(/"/g, '') || ''
  }

  toggleFocus(toggleState: string) {
    this.setState(prev => ({
        ...prev,
        inputFocused: toggleState === 'blur' ? false : true
      })
    )
  }

  handleClick(searchString: string) {
    if(searchString.length > 0) writeLocalStorage(JSON.stringify(searchString));
    const seekResult = apiSearch(searchString);
    seekResult.then(data => {
      // if(this.props.handleSearchResultChange) this.props.handleSearchResultChange(data, searchString);
      const pattern: searchData = formatResult(searchString);
      const result = data.map((item:object) => (
        {
          title: `${pattern.title}: ${item[pattern.title as keyof object]}`,
          param1: `${pattern.param1}: ${item[pattern.param1 as keyof object]}`,
          param2: `${pattern.param2}: ${item[pattern.param2 as keyof object]}`,
          param3: `${pattern.param3}: ${item[pattern.param3 as keyof object]}`,
          param4: `${pattern.param4}: ${item[pattern.param4 as keyof object]}`
        }
      ));
      if(this.props.handleSearchResultChange) this.props.handleSearchResultChange(result, searchString);
    });
    // fetch запрос к API и обновление массива searchResult
    // если нет строки запроса, проверка LS, если нет
    // записи в LS, запрос на все записиа API
  }

  render() {
    return (
      <section className="search-panel">
        <input
        type="text"
        title="Search"
        placeholder={this.state.inputFocused ? "" : "Write your API call here"}
        className="search-field"
        onFocus={() => this.toggleFocus('focus')}
        onBlur={() => this.toggleFocus('blur')}
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
