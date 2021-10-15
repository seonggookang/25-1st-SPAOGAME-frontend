import React from 'react';

class Orderproduct extends React.Component {
  render() {
    const { cartItem } = this.props;
    return (
      <div className="order_wrapper">
        <div className="wrapper">
          <tr>
            <div className="wrapper_checkbox">
              <td className="checkbox">
                <input type="checkbox" />
              </td>
            </div>
            <div className="image_information">
              <td>
                <img className="product_img" alt="!" src={cartItem.image} />
              </td>
            </div>
            <div className="wrapper_product_details">
              <td className="product_details">
                <ul>
                  <li>
                    <p>{cartItem.product_name}</p>
                    <p>
                      [옵션 : {cartItem.color} , {cartItem.size}]
                    </p>
                  </li>
                </ul>
              </td>
            </div>
            <div className="quantity_button">
              <td>
                <button>-</button>
                <input
                  type="text"
                  name="count"
                  className="productCount"
                  value={cartItem.quantity}
                  readOnly
                />
                <button>+</button>
              </td>
            </div>
            <div className="wrapper_cart_price">
              <td>{cartItem.price.toLocaleString('ko-KR')}</td>
            </div>
            <div className="wrapper_delete_button">
              <td>
                <button>삭제</button>
              </td>
            </div>
          </tr>
        </div>
      </div>
    );
  }
}

export default Orderproduct;
