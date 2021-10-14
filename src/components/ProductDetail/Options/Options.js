import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Options.scss';

class Options extends Component {
  constructor() {
    super();
    this.state = {
      targetnamecolor: ['옵션을 선택하세요'],
      cartcolor: '',
      gray: true,
      targetnamesize: ['옵션을 선택하세요'],
      cartsize: '',
      count: 0,
      countprice: 0,
      activeBtnByColor: '',
      activeBtnBySize: '',
    };
  }

  handleplus = e => {
    const count = this.state.count + 1;
    this.setState({
      count: count,
      countprice: (this.props.price * count).toLocaleString('ko-KR'),
    });
  };
  handleminus = e => {
    const count = this.state.count - 1;
    const countprice = this.props.price * count;
    this.setState({
      count: count < 0 ? 0 : count,
      countprice: countprice < 0 ? 0 : countprice,
    });
  };

  changeByTargetNameColor = (e, idx) => {
    e.target.className = 'black';
    this.setState({
      targetnamecolor: e.target.name,
      cartcolor: '- ' + e.target.name.toUpperCase() + ' /',
      activeBtnByColor: idx,
    });
  };

  changeByTargetNameSize = (e, idx) => {
    this.setState({
      targetnamesize: e.target.name,
      cartsize: e.target.name,
      activeBtnBySize: idx,
    });
  };

  goToBaskets = () => {
    this.props.history.push('/baskets');
  };

  goToReviewInput = () => {
    fetch('http://10.58.7.58:8000/users/review/', {
      method: 'POST',
      body: JSON.stringify({
        product_id: this.props.product_id,
        colorname: this.state.cartcolor,
        sizename: this.state.cartsize,
        count: this.state.count,
        price: this.state.countprice,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('비밀번호가 올바르지 않습니다!');
        } else {
          this.props.history.push('/baskets');
        }
      });
  };

  render() {
    console.log(this.props);
    const { name, colors, size, price } = this.props;
    const { targetnamecolor, targetnamesize, cartcolor, cartsize, countprice } =
      this.state;

    return (
      <div className="Options">
        <div className="code">SPCKB49W91</div>
        <div className="name">{name}</div>
        <div className="price">
          {price.toLocaleString('ko-KR')}
          <br />
          <hr />
        </div>
        <div className="choice_title">Color</div>
        {colors.map((item, idx) => (
          <button
            name={item}
            onClick={e => this.changeByTargetNameColor(e, idx)}
            className={
              this.state.activeBtnByColor == idx ? 'black_btn' : 'gray_btn'
            }
          >
            {item.toUpperCase()}
          </button>
        ))}
        <div>
          <span className="null_btn">[필수] </span>
          <span className="null_btn">{targetnamecolor}</span>
        </div>
        <div className="choice_title">Size</div>
        {size.map((item, idx) => (
          <button
            name={item}
            className={
              this.state.activeBtnBySize == idx ? 'black_btn' : 'gray_btn'
            }
            onClick={e => this.changeByTargetNameSize(e, idx)}
          >
            {item.toUpperCase()}
          </button>
        ))}
        <div>
          <span className="null_btn">[필수] </span>
          <span className="null_btn">{targetnamesize}</span>
        </div>
        <br /> <br />
        <hr />
        <div className="cart_wrapper">
          <div className="cart_name">{name}</div>
          <div className="cart_count_wrapper">
            <div className="cart_color_size">
              {cartcolor} {cartsize}
            </div>
            <div className="button_wrapper">
              <button className="minus" onClick={this.handleminus}>
                <i className="fas fa-minus"></i>
              </button>
              <button className="count">{this.state.count}</button>
              <button className="plus" onClick={this.handleplus}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="count_sum">{countprice}원</div>
          </div>
        </div>
        <hr className="hrr" />
        <div className="sum_price_wrapper">
          <div className="sum_price_content"> 총 상품 금액</div>
          <div className="sum_price">{countprice}원</div>
        </div>
        <div className="button_wrapper_icon">
          <form className="heart">
            <i className="far fa-heart"></i>
          </form>
          <form className="cart" onClick={this.goToBaskets}>
            <i className="fas fa-cart-plus"></i>
          </form>
          <form className="buy">구매하기</form>
        </div>
        <hr className="hrr" />
      </div>
    );
  }
}

export default withRouter(Options);
