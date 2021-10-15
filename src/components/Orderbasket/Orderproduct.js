import React from 'react';

class Orderproduct extends React.Component {
  render() {
    const { cartItem } = this.props;
    return (
      <tr>
        <td className="checkbox">
          <input type="checkbox" />
        </td>
        <div className="image_information">
          <td className="product_img">{cartItem.image}</td>
          <td className="product_details">
            <ul>
              <li>
                <p>{cartItem.product_name}</p>
                <p>
                  [옵션 : {cartItem.color}
                  {cartItem.size}]
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
        <td>{cartItem.price}</td>
        <td>
          <button>삭제</button>
        </td>
      </tr>
    );
  }
}

export default Orderproduct;
