import React from "react";
import { Props } from "../services/interface"

export default class Results extends React.Component<Props> {
  render() {
    let searchRes = undefined;
    if (this.props.searchResult !== undefined) searchRes = this.props.searchResult;
    console.log('searchRes = ', searchRes, Array.isArray(searchRes));

    const items = searchRes?.map((card, index) => 
      <div 
        className="card-wrapper"
        key={index}>
          <h2>{card.title}</h2>
          <p>{card.param1}</p>
          <p>{card.param2}</p>
          <p>{card.param3}</p>
          <p>{card.param4}</p>
      </div>);

      console.log('items =', items);
    return (
        <section className="result-panel">
          <div className="result-wrapper">
            {items}
          </div>
        </section>
    )
  }
}


// name?: string;
// model?: string;
// manufacturer?: string;
// cost_in_credits?: number;
// cargo_capacity?: number;
// films?: string[];