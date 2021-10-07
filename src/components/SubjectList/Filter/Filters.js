import React, { Component } from 'react';
import ColorFilter from './ColorFilter';
import MaterialFilter from './MaterialFilter';
import './Filters.scss';

class Filters extends Component {
  render() {
    return (
      <div className="main_left">
        <h2 className="title">FILTER</h2>
        <h3 className="filter_title">색상</h3>
        <ul className="colors">
          {FILTER.map(item => (
            <ColorFilter key={item.color} color={item.color} />
          ))}
        </ul>
        <h3 className="material_title">소재</h3>
        <ul className="material">
          {FILTER.map(item => (
            <MaterialFilter key={item.color} material={item.material} />
          ))}
        </ul>
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
export default Filters;
