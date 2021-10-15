import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageToggle from './ImageToggle';
import Searchbox from './Searchbox';
import './Nav.scss';
import nav_map from '../../../src/Common';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseOver: false,
      isMouseTextOver: false,
      hoveredText: '',
      isSearch: false,
      scroll: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        isMouseOver: !!window.scrollY,
        scroll: !!window.scrollY,
      });
    });
  }

  toggleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  toggleMouseLeave = () => {
    this.setState({
      hoveredText: '',
      isMouseOver: false,
      isMouseTextOver: false,
    });
  };

  toggleTextMouseOver = () => {
    this.setState(prev => ({
      isMouseTextOver: !prev.isMouseTextOver,
      isSearch: false,
    }));
  };

  searchButton = () => {
    this.setState(prev => ({
      isSearch: !prev.isSearch,
      hoveredText: '',
    }));
  };

  isMouseTextOverDie = () => {
    this.setState({
      isMouseTextOver: false,
    });
  };

  goToMain = () => {
    this.props.history.push('/');
  };

  goToMyProfile = () => {
    this.props.history.push('/users/signin');
  };

  goToWomenOuter = () => {
    this.props.history.push('/products');
    this.setState({
      isMouseOver: true,
    });
  };

  goToBasket = () => {
    this.props.history.push('/baskets');
  };

  render() {
    const { scroll } = this.state;

    return (
      <>
        {this.state.isMouseOver && this.state.hoveredText !== '' && (
          <div className="background"></div>
        )}
        <div
          className={scroll ? 'Nav2' : 'Nav'}
          onMouseEnter={this.toggleMouseOver}
          onMouseLeave={this.toggleMouseLeave}
        >
          <div className="nav_wrapper">
            <div className="nav_letters">
              <ImageToggle
                className="logo"
                isMouseOver={this.state.isMouseOver}
                onClick={this.goToMain}
              />
              <div className="nav_menu">
                <div className="nav_menu_Festival">FLECE FESTIVAL</div>
                <div
                  className="nav_menu_Outer"
                  onMouseEnter={() => {
                    this.setState({
                      hoveredText: '',
                    });
                  }}
                >
                  OUTER
                </div>
                <div className="nav_menu_white">
                  <div
                    onMouseEnter={() => {
                      this.setState({
                        hoveredText: 'women',
                        isMouseTextOver: true,
                        isSearch: false,
                      });
                    }}
                  >
                    WOMEN
                  </div>
                  <div
                    onMouseEnter={() => {
                      this.setState({
                        hoveredText: 'men',
                        isMouseTextOver: true,
                        isSearch: false,
                      });
                    }}
                  >
                    MEN
                  </div>
                  <div
                    onMouseEnter={() => {
                      this.setState({
                        hoveredText: 'kids',
                        isMouseTextOver: true,
                        isSearch: false,
                      });
                    }}
                  >
                    KIDS
                  </div>
                  <div
                    onMouseEnter={() => {
                      this.setState({
                        hoveredText: 'collaboration',
                        isMouseTextOver: true,
                        isSearch: false,
                      });
                    }}
                  >
                    COLLABORATION
                  </div>
                  <div
                    onMouseEnter={() => {
                      this.setState({
                        hoveredText: 'community',
                        isMouseTextOver: true,
                        isSearch: false,
                      });
                    }}
                  >
                    COMMUNITY
                  </div>
                </div>
              </div>
            </div>

            <div className="profile">
              <div
                onClick={this.goToMyProfile}
                onMouseEnter={this.isMouseTextOverDie}
              >
                <i className="fas fa-user" />
              </div>
              <div>
                <i className="far fa-heart" />
              </div>
              <div onClick={this.searchButton}>
                <i className="fas fa-search" />
              </div>

              <div onClick={this.goToBasket}>
                <i className="fas fa-shopping-basket" />
              </div>
            </div>
          </div>

          {this.state.isSearch && (
            <div className="searchbox">
              <Searchbox />
            </div>
          )}
          {/* 각 메뉴에 hover 됐을때 글자를 가져올수 있게. */}
          {this.state.hoveredText !== '' && this.state.isMouseTextOver && (
            <div className="Drop_down">
              <div className="Drop_down_left">
                {nav_map[this.state.hoveredText].first_menu.map((el, idx) => {
                  return <div key={idx}>{el.title}</div>;
                })}
              </div>

              <div className="Drop_down_center">
                <div>
                  {nav_map[this.state.hoveredText].second_menu.map(
                    (el, idx) => {
                      return (
                        <div
                          className="red_text"
                          key={idx}
                          onClick={this.goToWomenOuter}
                        >
                          {el.title}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="Drop_down_right">
                <div>
                  {nav_map[this.state.hoveredText].third_menu.map((el, idx) => {
                    return (
                      <div key={idx}>
                        {<img alt="category_image" src={el.img_src} />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default withRouter(Nav);
