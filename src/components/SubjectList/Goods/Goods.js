import React, { Component } from 'react';

class Goods extends Component {
  state: goToSubject = () => {
    fetch('http://10.58.2.199:8000/products/2')
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods_detail: data.goods_detail,
        });
      });
  };
  render() {
    const { name, price, review_count, img_urls } = this.props.item;

    return (
      <li className="Goods">
        <div className="image_wrapper">
          <img alt="상품 이미지" src={img_urls} onClick={this.goToSubject} />
        </div>
        <div className="description">
          <div className="name_heart_wrapper">
            <span className="subject_name">{name} </span>
            <span className="heart">
              <i className="far fa-heart" />
            </span>
          </div>
          <div className="subject_price">{price.toLocaleString('ko-KR')}</div>
          <div className="review_count">{`리뷰 ${review_count} 건`}</div>
        </div>
      </li>
    );
  }
}

export default Goods;
