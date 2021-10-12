import React from 'react';
import '../pages/Basket.scss';

class Basket extends React.Component {
  render() {
    return (
      <main className="basket_container">
        <section className="basket_contents">
          <h1>네브바 올자리</h1>
          <div className="basket_header">
            <ol>
              <li>
                <button className="basket_home_button">Home</button>
              </li>
              <li className="basket_location"> > 장바구니</li>
            </ol>
          </div>
          <div className="basket_title">
            <h2>장바구니</h2>
          </div>
          <div className="product_basket">
            <div className="product_basket_title">
              <ul className="product_menu">
                <li className="selected">
                  <a href=" ! ">국내배송상품 (0)</a>
                </li>
                <li className="selected">
                  <a href=" ! ">해외배송상품 (0)</a>
                </li>
              </ul>
              <p className="right_setence">
                장바구니에 담긴 상품은 30일동안 보관됩니다.
              </p>
            </div>
            <div className="vacant_basket">
              <p>장바구니가 비어있습니다.</p>
              <ul></ul>
            </div>
            <div className="delivery_wrapper">
              <div className="delivery_title">배송방법</div>
              <div className="basket_delivery">
                <ul>
                  <li>
                    <a href="!">택배</a>
                  </li>
                  <li>
                    <a href="!">매장픽업</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="basket_order_button">
              <button className="order_select_item">선택상품주문</button>
              <button className="continue_shopping">쇼핑계속하기</button>
              <button className="order_all_items">전제상품주문</button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Basket;
