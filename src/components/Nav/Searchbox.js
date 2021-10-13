import React from 'react';
import './Searchbox.scss';
import nav_map from '../../../src/Common';

class Searchbox extends React.Component {
  render() {
    return (
      <div className="Searchbox">
        <div className="greeting">
          고객님
          <br />
          무엇을찾으시나요?
        </div>

        <div className="find">
          <input placeholder="상품을 찾아보세요" />
          <div>
            <i class="fas fa-search" />
          </div>
        </div>

        <div className="recommend">
          <div className="popular">
            <div className="word">#인기검색어</div>
            <div className="ten_keywords">
              <span>#파자마</span>
              <span>#잠옷</span>
              <span>#데님</span>
              <span>#윈드브레이커</span>
              <span>#푸퍼</span>
              <span>#허니푸퍼</span>
              <span>#웜테크</span>
              <span>#슬랙스</span>
              <span>#자켓</span>
              <span>#스웻셋업</span>
            </div>
          </div>
          <div className="images">
            <div>#추천상품</div>
            <div className="recommend_pictures">
              {nav_map.recommend.picture.map((el, idx) => {
                return (
                  <div key={idx} className="recommend_each">
                    <img alt="recommend" src={el} width="130em" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Searchbox;
