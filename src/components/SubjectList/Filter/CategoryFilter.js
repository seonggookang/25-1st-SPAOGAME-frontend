import React, { Component } from 'react';
import './CategoryFilter.scss';

class CategoryFilter extends Component {
  render() {
    const { name } = this.props.category;
    return <button className="category_button">{name}</button>;
  }
}

export default CategoryFilter;
