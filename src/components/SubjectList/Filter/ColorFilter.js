import React, { Component } from 'react';
import './ColorFilter.scss';

class ColorFilter extends Component {
  render() {
    return (
      <li>
        <button style={{ backgroundColor: this.props.color }} />
      </li>
    );
  }
}

export default ColorFilter;
