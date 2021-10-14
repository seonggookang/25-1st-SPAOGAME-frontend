import React, { Component } from 'react';
import Description from './Description';
import './Product.scss';

class Product extends Component {
  render() {
    const { id, colors, size } = this.props;
    return (
      <>
        {this.props.image.map(image => (
          <img
            className="detail_photo"
            alt="상품 상세이미지"
            key={image}
            src={image}
          />
        ))}
        <Description key={id} colors={colors} size={size} />
      </>
    );
  }
}

export default Product;
