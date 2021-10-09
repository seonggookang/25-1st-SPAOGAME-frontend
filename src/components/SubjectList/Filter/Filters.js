import React, { Component } from 'react';
import ColorFilter from './ColorFilter';
import MaterialFilter from './MaterialFilter';
import './Filters.scss';

class Filters extends Component {
  render() {
    const { goods, colorSort } = this.props;
    return (
      <div className="Filters">
        <div className="main_left">
          <h2 className="title">FILTER</h2>
          <h3 className="filter_title">색상</h3>
          <ul className="colors">
            {this.props.FILTER.map(item => (
              <ColorFilter
                key={item.color}
                color={item.color}
                goods={goods}
                colorSort={colorSort}
              />
            ))}
          </ul>
          <h3 className="material_title">소재</h3>
          <ul className="material">
            {this.props.FILTER.map(item => (
              <MaterialFilter key={item.color} material={item.material} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Filters;
