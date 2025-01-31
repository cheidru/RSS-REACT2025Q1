import React from "react";
import { Props } from "../services/interface"

export default class Results extends React.Component<Props> {
  render() {
    console.log('ResultPanel props = ', this.props);
    let searchRes = undefined;
    if (this.props.searchResult !== undefined) searchRes = this.props.searchResult;
    console.log('searchRes = ', searchRes);
    const items = searchRes?.map((card, index) => 
      <div 
        className="card-wrapper"
        key={index}>
          <h2>Name: {card.name}</h2>
          <p>Model: {card.model}</p>
          <p>Manufacturer: {card.manufacturer}</p>
          <p>Cargo: {card.cargo_capacity}</p>
          <p>Cost: {card.cost_in_credits}</p>
      </div>);
    return (
      <>
        <div className="panel result-panel">
          <div className="result-wrapper">
            {items}
          </div>
        </div>
      </>
    )
  }
}