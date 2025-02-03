import React from 'react';
import { Props } from '../services/interface';

export default class Results extends React.Component<Props> {
  render() {
    const items = this.props.searchResult?.map((card, index) => (
      <div className="card-wrapper" key={index}>
        <h2>{card.title}</h2>
        <p>{card.param1}</p>
        <p>{card.param2}</p>
        <p>{card.param3}</p>
        <p>{card.param4}</p>
      </div>
    ));
    return (
      <section className="result-panel">
        <div className="result-wrapper">{items}</div>
      </section>
    );
  }
}
