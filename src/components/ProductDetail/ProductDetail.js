import React, { Component } from 'react';
import Product from './ProductsDetail/Product';
import Options from './Options/Options';
import Reviews from './Reviews/Reviews';
import ReviewInput from '../ReviewInput/ReviewInput';

import './ProductDetail.scss';
import './Reviews/Review.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      goods_detail: [],
      category: [],
      filterdFunction: [],
      isReviewInputPopup: false,
      content_writer: '',
    };
  }

  componentDidMount() {
    fetch(`http://192.168.0.133:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods_detail: data.goods_detail,
        });
      });
  }

  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };

  handleModal = e => {
    this.setState({
      isReviewInputPopup: !this.state.isReviewInputPopup,
    });
  };

  render() {
    console.log(this.state);
    const { goods_detail } = this.state;

    return (
      <div className="ProductDetail">
        <div className="nav_position" />
        <main onClick={e => e.stopPropagation()}>
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
                key={item.product_id}
                goods_detail={goods_detail}
                price={item.price}
                name={item.name}
                colors={item.colors}
                size={item.size}
                product_id={item.product_id}
              />
            ))}
          </div>
        </main>

        <div className="bottom_wrapper">
          {this.state.goods_detail.map(item => (
            <Reviews
              key={item.product_id}
              posting_info={item.posting_info}
              comment_info={item.comment_info}
              product_id={item.product_id}
            />
          ))}
        </div>
        <div>
          {this.state.isReviewInputPopup && (
            <ReviewInput handleModal={this.handleModal} />
          )}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
