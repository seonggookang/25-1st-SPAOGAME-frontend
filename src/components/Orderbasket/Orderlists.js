import React from 'react';
import Orderproduct from './Orderproduct';
// import { BASE_URL } from 'react';
import '../../components/Orderbasket/Orderlists.scss';

class Orderlists extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/basket.json').then(res =>
      res.json().then(data => {
        this.setState({ cartList: data.basket });
      })
    );
  }

  render() {
    const { cartList } = this.state;
    return (
      <section className="order_lists">
        <form className="order_title">
          <h3>일반상품</h3>
        </form>
        <table className="order_table">
          <caption>일반배송</caption>
          <thead>
            <tr>
              <th scope="col">
                <input className="th_checkbox" type="checkbox" />
              </th>
              <th scope="col" className="th_img">
                이미지자리
              </th>
              <th scope="col" className="th_details">
                상품정보
              </th>
              <th scope="col" className="th_quantity">
                수량
              </th>
              <th scope="col" calssName="th_amount">
                가격
              </th>
              <th scope="col" className="th_select">
                선택
              </th>
            </tr>
          </thead>
        </table>
        <tbody>
          {cartList.map(item => (
            <tr key={item.id}>
              <Orderproduct cartItem={item} />
            </tr>
          ))}
        </tbody>
      </section>
    );
  }
}

export default Orderlists;
