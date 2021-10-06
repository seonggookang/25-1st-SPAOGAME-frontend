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
    };
  }
  componentDidMount() {
    fetch('/data/goods.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          goods: data,
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

  render() {
    const { category, goods } = this.state;
    return (
      <div className="subject_wrapper">
        <nav></nav>
        <main>
          <Filters color={goods} />
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
              </button>
            </div>
            <ul className="subjects">
              <GoodsList goods={goods} />
            </ul>
          </div>
          <div className="main_right"></div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default SubjectList;
