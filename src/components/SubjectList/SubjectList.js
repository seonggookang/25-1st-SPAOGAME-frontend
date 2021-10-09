import React, { Component } from 'react';
import GoodsList from './Goods/GoodList';
import Filters from './Filter/Filters';
import CategoryFilter from './Filter/CategoryFilter';
import './SubjectList.scss';

class SubjectList extends Component {
  constructor() {
    super();
    this.state = {
      goods: [],
      category: [],
      filterdFunction: [],
    };
  }

  componentDidMount() {
    fetch('/data/goods.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods: data.goods,
          filterdFunction: data.goods,
        });
      });

    fetch('/data/category.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          category: data,
        });
      });
  }

  sortByPrice = e => {
    const priceCompare = e.target.getAttribute('name');

    const sortByPrice = [...this.state.goods].sort(function (a, b) {
      return a[priceCompare] - b[priceCompare];
    });

    this.setState({ goods: sortByPrice });
  };

  sortByPriceDesc = () => {
    const priceCompare = 'price';
    const sortByPrice = [...this.state.goods].sort(function (a, b) {
      return b[priceCompare] - a[priceCompare];
    });

    this.setState({ goods: sortByPrice });
  };

  sortByName = () => {
    const priceCompare = 'name';
    const sortByPrice = [...this.state.goods].sort(function (a, b) {
      return a[priceCompare] < b[priceCompare]
        ? -1
        : a[priceCompare] > b[priceCompare]
        ? 1
        : 0;
    });

    this.setState({ color: sortByPrice });
  };

  colorSort = e => {
    const targetColor = e.target.getAttribute('name');
    const sortByColor = [...this.state.filterdFunction].filter(item =>
      item.colors.includes(targetColor)
    );
    this.setState({ goods: sortByColor });
  };

  render() {
    const { category, goods } = this.state;

    return (
      <div className="subject_list">
        <nav />
        <main>
          <Filters
            goods={goods}
            colorSort={this.colorSort}
            FILTER={FILTER}
            filterdFunction={this.state.filterdFunction}
          />
          <div className="main_mid">
            <h1>아우터</h1>
            <div className="category_filter_wrapper">
              <div className="category_filter">
                {category.map(item => (
                  <CategoryFilter key={item.id} category={item} />
                ))}
              </div>
              <button className="item_count"> 8 items</button>
              <button className="sort">
                상품정렬 &nbsp;<i className="fas fa-chevron-down"></i>
                <ul className="dropbox">
                  <li className="dropbox_item">신상품</li>
                  <li
                    className="dropbox_item"
                    name="name"
                    onClick={this.sortByName}
                  >
                    상품명
                  </li>
                  <li
                    className="dropbox_item"
                    name="price"
                    onClick={this.sortByPrice}
                  >
                    낮은가격순
                  </li>
                  <li
                    className="dropbox_item"
                    name="price"
                    onClick={this.sortByPriceDesc}
                  >
                    높은가격순
                  </li>
                </ul>
              </button>
            </div>
            <ul className="subjects">
              <GoodsList goods={goods} />
            </ul>
          </div>
          <div className="main_right"></div>
        </main>
        <footer />
      </div>
    );
  }
}
const FILTER = [
  { color: 'black', material: '린넨' },
  { color: 'yellow', material: '쿨테크' },
  { color: 'orange', material: '데님' },
  { color: 'red', material: '폴리스' },
  { color: 'blue', material: '코튼' },
  { color: 'white', material: '패딩' },
  { color: 'green', material: '고어텍스' },
  { color: 'gray', material: '시어서커' },
  { color: 'pink', material: '레더' },
  { color: 'purple', material: '치노' },
  { color: 'brown', material: '코듀로이' },
  { color: 'beige', material: '페이크퍼' },
];
export default SubjectList;
