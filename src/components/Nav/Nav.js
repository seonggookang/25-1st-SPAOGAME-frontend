import React from 'react';
import './Nav.scss';
// 함수,변수는 카멜
// 클래스네임 스네이크
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseOver: false,
    };
  }

  // prev
  toggleMouseOver = () => {
    this.setState(prev => ({ isMouseOver: !prev.isMouseOver }));
  };

  render() {
    return (
      <div
        className="Nav"
        onMouseEnter={this.toggleMouseOver}
        onMouseLeave={this.toggleMouseOver}
      >
        <div className="Nav_wrapper">
          {/* navbar 작성 */}
          <div className="Nav_letters">
            {this.state.isMouseOver ? (
              <img src="images/red.png" alt="red" />
            ) : (
              <img src="images/white.png" alt="whitle" />
            )}

            <div className="Nav_menu">
              <div className="Nav_menu_Festival">FLECE FESTIVAL</div>
              <div className="Nav_menu_Outer">OUTER</div>
              <div className="Nav_menu_white">
                <div>BEST</div>
                <div>WOMEN</div>
                <div>MEN</div>
                <div>KIDS</div>
                <div>COLLABORATION</div>
                <div>COMMUNITY</div>
              </div>
            </div>
          </div>

          {/* my_profile & search & heart & basket */}
          <div className="profile">
            <div>
              <i class="fas fa-user"></i>
            </div>
            <div>
              <i class="far fa-heart"></i>
            </div>
            <div>
              <i class="fas fa-search"></i>
            </div>
            <div>
              <i class="fas fa-shopping-basket"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
