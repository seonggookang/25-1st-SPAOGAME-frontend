import React, { Component } from 'react';
import './ColorFilter.scss';

class ColorFilter extends Component {
  constructor() {
    super();
    this.state = {
      goods: [],
    };
  }

  render() {
    const { colorSort, color } = this.props;
    return (
      <li>
        <button
          className="ColorFilter"
          style={{ backgroundColor: color }}
          name={color}
          onClick={colorSort}
        />
      </li>
    );
  }
}

export default ColorFilter;
