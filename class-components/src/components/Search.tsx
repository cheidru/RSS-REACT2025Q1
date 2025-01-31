import React from "react";
import apiSearch from "../services/api";
import { Props } from "../services/interface"
import { readLocalStorage, writeLocalStorage } from "../services/localStoreage"
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
    console.log(searchString);
    writeLocalStorage(JSON.stringify(searchString));
    const seekResult = apiSearch(this.state.value.trim());
    seekResult.then(data => { 
      if(this.props.handleSearchResultChange) this.props.handleSearchResultChange(data);
      console.log(seekResult);
    });
      
    // this.setState({isSubmitDisabled: true});
    // this.setState({inputFocused: false});
    // this.setState({value: ''});

    // fetch запрос к API и обновление массива searchResult
    // если нет строки запроса, проверка LS, если нет
    // записи в LS, запрос на все записиа API
  }

  render() {
    console.log('this.state=',this.state);
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
        onClick={() => this.handleClick(this.state.value)}
      > 
        Search
      </button>
    </section>
    )
  }
}
