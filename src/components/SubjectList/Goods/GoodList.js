import React, { Component } from 'react';
import Goods from './Goods';
import './Good.scss';

class GoodList extends Component {
  render() {
    const { goods } = this.props;
    return (
      <>
        {goods.map(item => (
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
