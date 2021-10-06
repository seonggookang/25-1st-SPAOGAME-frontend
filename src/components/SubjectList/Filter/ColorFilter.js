import React, { Component } from 'react';

class ColorFilter extends Component {
  render() {
    return (
      <li>
        <button style={{ backgroundColor: this.props.color }}></button>
      </li>
    );
  }
}

export default ColorFilter;
