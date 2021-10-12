import React, { Component } from 'react';
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
    const { name, colors, size, price } = this.props;
    const { targetnamecolor, targetnamesize, cartcolor, cartsize, countprice } =
      this.state;
    const btn_color = this.state.gray ? 'gray_btn' : 'black_btn';

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
          <form className="cart">
            <i className="fas fa-cart-plus"></i>
          </form>
          <form className="buy">구매하기</form>
        </div>
        <hr className="hrr" />
      </div>
    );
  }
}

export default Options;
