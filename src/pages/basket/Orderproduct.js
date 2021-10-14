import React from 'react';

class Orderproduct extends React.Component {
  render() {
    return (
      <table>
        <td className="checkbox">
          <input type="checkbox" />
        </td>
        <td className="product_img">이미지등장하실곳!</td>
        <td className="product_details">
          <ul>
            <li>
              <strong>[포우먼] 날개사 크롭 가디건_SPCKB4VW91</strong>
              <p>"[옵션 : (31)LIGHT YELLOW/FREE(999)]"</p>
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
      </table>
    );
  }
}

export default Orderproduct;
