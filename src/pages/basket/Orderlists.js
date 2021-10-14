import React from 'react';
import '../basket/Orderlists.scss';

class Orderlists extends React.Component {
  render() {
    return (
      <div className="order_lists">
        <div className="order_title">
          <h3>일반상품 ( )</h3>
        </div>
        <table className="order_table">
          <caption>일반배송</caption>
          <thead>
            <tr>
              <th>
                <input className="th_checkbox" type="checkbox" />
              </th>
              <th className="th_img">이미지자리</th>
              <th className="th_details">상품정보</th>
              <th className="th_quantity">수량</th>
              <th className="th_shipping">배송구분</th>
              <th className="th_shipping_fee">배송비</th>
              <th calssName="th_amount">합계</th>
              <th className="th_select">선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>{/*컴포넌트들어올곳*/}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orderlists;
