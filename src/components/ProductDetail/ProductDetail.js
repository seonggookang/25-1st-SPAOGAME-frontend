import React, { Component } from 'react';
import Product from './ProductsDetail/Product';
import Options from './Options/Options';
import Reviews from './Reviews/Reviews';
import './ProductDetail.scss';
import './Reviews/Review.scss';

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

  handleDelete = reply => {
    const replys = this.state.replys.filter(item => item.id !== reply.id);
    this.setState({ replys });
  };

  goToReviewInput = () => {
    this.props.history.push('/review');
  };

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
                key={item.product_id}
                goods_detail={goods_detail}
                price={item.price}
                name={item.name}
                colors={item.colors}
                size={item.size}
              />
            ))}
          </div>
        </main>
        <div class="review_submit_wrapper">
          <button className="review_submit" onClick={this.goToReviewInput}>
            리뷰작성
          </button>
        </div>
        <hr className="hr_bottom" />
        <div className="bottom_wrapper">
          {this.state.goods_detail.map(item => (
            <Reviews
              key={item.product_id}
              posting_info={item.posting_info}
              comment_info={item.comment_info}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductDetail;
