import React from 'react';
import '../Cart/Orderlists.scss';

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
              <th className="th_img">이미지!</th>
              <th className="th_details">상품정보</th>
              <th className="th_quantity">수량</th>
              <th className="th_shipping">배송구분</th>
              <th className="th_shipping_fee">배송비</th>
              <th calssName="th_amount">합계</th>
              <th className="th_select">선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="checkbox">
                <input type="checkbox" />
              </td>
              <td className="product_img">이미지등장하실곳!</td>
              <td className="product_details">
                <ul>
                  <li>
                    <strong>[포우먼] 날개사 크롭 가디건_SPCKB4VW91</strong>
                    "[옵션 : (31)LIGHT YELLOW/FREE(999)]"
                  </li>
                </ul>
              </td>
              <td>
                <button>-</button>
                <input />
                <button>+</button>
              </td>
              <td>기본배송</td>
              <td>2500원</td>
              <td>합계가격!</td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orderlists;
