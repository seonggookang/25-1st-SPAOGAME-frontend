import React, { Component } from 'react';

class CategoryFilter extends Component {
  render() {
    const { name } = this.props.category;
    return (
      <ul>
        <button className="category_button">{name}</button>
      </ul>
    );
  }
}

export default CategoryFilter;
