import React, { Component } from 'react';
import Product from './ProductsDetail/Product';
import Options from './Options/Options';
import Reviews from './Reviews/Reviews';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      goods_detail: [],
      category: [],
      filterdFunction: [],
    };
  }

  componentDidMount() {
    fetch('/data/goodsDetail.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods_detail: data.goods_detail,
        });
      });
  }
  render() {
    const { goods_detail } = this.state;
    return (
      <div className="ProductDetail">
        <main>
          <div className="product_detail_left">
            {this.state.goods_detail.map(item => (
              <Product
                key={item.product_id}
                goods={goods_detail}
                image={item.image_list}
                description={item.description}
                colors={item.colors}
                size={item.size}
              />
            ))}
          </div>
          <div className="product_detail_right">
            {this.state.goods_detail.map(item => (
              <Options
                key={item.id}
                goods_detail={goods_detail}
                price={item.price}
                name={item.name}
                colors={item.colors}
                size={item.size}
              />
            ))}
          </div>
        </main>
        <div className="bottom_wrapper">
          <div className="stars_wrapper">
            <hr className="hr_bottom" />
          </div>
          {this.state.goods_detail.map(item => (
            <Reviews posting_info={item.posting_info} />
          ))}
          <hr className="hr_bottom" />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
