import React from 'react';

class Amount extends React.Component {
  render() {
    return (
      <table>
        <caption>총 주문금액</caption>
        <tbody>
          <tr>
            <td>
              <div>총 상품금액</div>
              <div>
                <strong>39,900</strong>
              </div>
              <div>
                <strong>+</strong>
              </div>
            </td>
            <td>
              <div>총 배송비</div>
              <div>
                <strong>2,500</strong>
              </div>
              <div>
                <strong>=</strong>
              </div>
            </td>
            <td>
              <div>결재예정금액</div>
              <div>
                <strong>39,900</strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Amount;
