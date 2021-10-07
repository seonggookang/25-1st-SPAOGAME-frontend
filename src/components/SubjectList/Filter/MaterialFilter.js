import React, { Component } from 'react';
import './MaterialFilter.scss';

class MaterialFilter extends Component {
  render() {
    return (
      <li>
        <button className="material_button">{this.props.material}</button>
      </li>
    );
  }
}

export default MaterialFilter;
