import React from 'react';
import ImageToggle from './ImageToggle';
import './Nav.scss';
import nav_map from '../../../src/Common';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseOver: false,
      isMouseTextOver: false,
      hoveredText: '',
    };
  }

  toggleMouseOver = () => {
    this.setState(prev => ({ isMouseOver: !prev.isMouseOver }));
  };

  toggleTextMouseOver = () => {
    this.setState(prev => ({
      isMouseTextOver: !prev.isMouseTextOver,
    }));
  };

  render() {
    return (
      <div
        className="Nav"
        onMouseEnter={this.toggleMouseOver}
        onMouseLeave={this.toggleMouseOver}
      >
        <div className="nav_wrapper">
          <div className="nav_letters">
            <ImageToggle isMouseOver={this.state.isMouseOver} />
            <div className="nav_menu">
              <div className="nav_menu_Festival">FLECE FESTIVAL</div>
              <div className="nav_menu_Outer">OUTER</div>
              <div className="nav_menu_white">
                <div>BEST</div>
                <div
                  onMouseEnter={() => {
                    this.toggleTextMouseOver();
                    this.setState({ hoveredText: 'women' });
                  }}
                  onMouseLeave={this.toggleTextMouseOver}
                >
                  WOMEN
                </div>
                <div
                  onMouseEnter={() => {
                    this.toggleTextMouseOver();
                    this.setState({ hoveredText: 'men' });
                  }}
                  onMouseLeave={this.toggleTextMouseOver}
                >
                  MEN
                </div>
                <div
                  onMouseEnter={() => {
                    this.toggleTextMouseOver();
                    this.setState({ hoveredText: 'kids' });
                  }}
                  onMouseLeave={this.toggleTextMouseOver}
                >
                  KIDS
                </div>
                <div
                  onMouseEnter={() => {
                    this.toggleTextMouseOver();
                    this.setState({ hoveredText: 'collaboration' });
                  }}
                  onMouseLeave={this.toggleTextMouseOver}
                >
                  COLLABORATION
                </div>
                <div
                  onMouseEnter={() => {
                    this.toggleTextMouseOver();
                    this.setState({ hoveredText: 'community' });
                  }}
                  onMouseLeave={this.toggleTextMouseOver}
                >
                  COMMUNITY
                </div>
              </div>
            </div>
          </div>

          <div className="profile">
            <div>
              <i class="fas fa-user" />
            </div>
            <div>
              <i class="far fa-heart" />
            </div>
            <div>
              <i class="fas fa-search" />
            </div>
            <div>
              <i class="fas fa-shopping-basket" />
            </div>
          </div>
        </div>
        {this.state.isMouseTextOver && this.state.hoveredText !== '' && (
          <div className="Drop_down">
            <div className="Drop_down_left">
              <div>
                {nav_map
                  .get(this.state.hoveredText)
                  .first_menu.map((el, idx) => {
                    return <div key={idx}>{el.title}</div>;
                  })}
              </div>
            </div>
            <div className="Drop_down_center">
              <div>
                {nav_map
                  .get(this.state.hoveredText)
                  .second_menu.map((el, idx) => {
                    return <div key={idx}>{el.title}</div>;
                  })}
              </div>
            </div>
            <div className="Drop_down_right">
              {nav_map.get(this.state.hoveredText).third_menu.map((el, idx) => {
                console.log(el.img_src);
                return (
                  <div key={idx}>
                    <img alt="error" src={el.img_src} width="120em" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Nav;
