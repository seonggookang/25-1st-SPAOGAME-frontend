import React, { Component } from 'react';
import './Options.scss';

class Ortions extends Component {
  constructor() {
    super();
    this.state = {
      targetnamecolor: ['옵션을 선택하세요'],
      cartcolor: '',
      gray: true,
      targetnamesize: ['옵션을 선택하세요'],
      cartsize: '',
      mybasket: [],
    };
  }

  changeByTargetNameColor = e => {
    e.target.className = 'black';
    this.setState({
      targetnamecolor: e.target.name,
      cartcolor: '- ' + e.target.name.toUpperCase() + ' /',
      gray: false,
    });
  };

  changeByTargetNameSize = e => {
    e.target.className = 'black';
    this.setState({
      targetnamesize: e.target.name,
      cartsize: e.target.name,

      gray: false,
    });
  };

  render() {
    const { name, price, colors, size } = this.props;
    const { targetnamecolor, targetnamesize, cartcolor, cartsize } = this.state;
    const btn_color = this.state.gray ? 'gray_btn' : 'black_btn';

    return (
      <div className="Options">
        <div className="code">SPCKB49W91</div>
        <div className="name">{name}</div>
        <div className="price">
          {price}
          <br />
          <hr />
        </div>
        <div className="choice_title">Color</div>
        {colors.map(item => (
          <button name={item} onClick={this.changeByTargetNameColor}>
            {item.toUpperCase()}
          </button>
        ))}
        <div>
          <span className="gray_btn">[필수] </span>
          <span className={btn_color}>{targetnamecolor}</span>
        </div>
        <div className="choice_title">Size</div>
        {size.map(item => (
          <button name={item} onClick={this.changeByTargetNameSize}>
            {item.toUpperCase()}
          </button>
        ))}
        <div>
          <span className="gray_btn">[필수] </span>
          <span className={btn_color}>{targetnamesize}</span>
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
              <button className="plus">
                <i class="fas fa-plus"></i>
              </button>
              <button className="count">3</button>
              <button className="minus">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <div className="count_sum">39900</div>
          </div>
        </div>
        <hr className="hrr" />
        <div className="sum_price_wrapper">
          <div className="sum_price_content"> 총 상품 금액</div>
          <div className="sum_price">39000 원</div>
        </div>
        <div className="button_wrapper_icon">
          <submit className="heart">
            <i class="far fa-heart"></i>
          </submit>
          <submit className="cart">
            <i class="fas fa-cart-plus"></i>
          </submit>
          <submit className="buy">구매하기</submit>
        </div>
        <hr className="hrr" />
      </div>
    );
  }
}

export default Ortions;
