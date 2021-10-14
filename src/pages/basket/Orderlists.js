import React from 'react';
import '../basket/Orderlists.scss';

class Orderlists extends React.Component {
  render() {
    return (
      <section className="order_lists">
        <form className="order_title">
          <h3>일반상품</h3>
        </form>
        <table className="order_table">
          <caption>일반배송</caption>
          <colgroup>
            <col style={{ width: '80px' }}></col>
            <col style={{ width: '100px' }}></col>
            <col style={{ width: 'auto' }}></col>
            <col style={{ width: '120px' }}></col>
            <col style={{ width: '120px' }}></col>
            <col style={{ width: '120px' }}></col>
            <col style={{ width: '120px' }}></col>
            <col style={{ width: '120px' }}></col>
          </colgroup>
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
              <th scope="col" className="th_shipping">
                배송구분
              </th>
              <th scope="col" className="th_shipping_fee">
                배송비
              </th>
              <th scope="col" calssName="th_amount">
                합계
              </th>
              <th scope="col" className="th_select">
                선택
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>{/*오더 프로덕트가 들어갈곳*/}</tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Orderlists;
