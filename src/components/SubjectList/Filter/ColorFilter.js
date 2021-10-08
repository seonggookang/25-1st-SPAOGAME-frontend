import React, { Component } from 'react';
import './ColorFilter.scss';

class ColorFilter extends Component {
  render() {
    return (
      <li>
        <button
          className="ColorFilter"
          style={{ backgroundColor: this.props.color }}
        />
      </li>
    );
  }
}

export default ColorFilter;
