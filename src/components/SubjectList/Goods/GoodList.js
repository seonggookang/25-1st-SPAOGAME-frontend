import React, { Component } from 'react';
import Goods from './Goods';

class GoodList extends Component {
  render() {
    return (
      <>
        {this.props.goods.map(item => (
          <Goods
            key={item.name}
            item={item}
            name={item.name}
            price={item.price}
            count={item.review_count}
            image={item.image}
          />
        ))}
      </>
    );
  }
}

export default GoodList;
