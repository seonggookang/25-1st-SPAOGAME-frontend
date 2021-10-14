import React from 'react';
import ImageToggle from './ImageToggle';
import Searchbox from './Searchbox';
import './Nav.scss';
import nav_map from '../../../src/Common';

// class Nav extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isMouseOver: false,
//       isMouseTextOver: false,
//       hoveredText: 'women',
//       isSearch: false,
//       isContent: false,
//     };
//   }

//   toggleMouseOver = () => {
//     this.setState(prev => ({ isMouseOver: true }));
//   };

//   toggleMouseLeave = () => {
//     this.setState(prev => ({
//       isMouseOver: false,
//       isMouseTextOver: false,
//     }));
//   };

//   toggleTextMouseOver = () => {
//     this.setState(prev => ({
//       isMouseTextOver: !prev.isMouseTextOver,
//       isSearch: false,
//     }));
//   };

//   searchButton = () => {
//     this.setState(prev => ({
//       isSearch: !prev.isSearch,
//     }));
//   };

//   render() {
//     return (
//       <div
//         className="Nav"
//         onMouseEnter={this.toggleMouseOver}
//         onMouseLeave={this.toggleMouseLeave}
//       >
//         <div className="nav_wrapper">
//           <div className="nav_letters">
//             <ImageToggle
//               className="logo"
//               isMouseOver={this.state.isMouseOver}
//             />
//             <div className="nav_menu">
//               <div className="nav_menu_Festival">FLECE FESTIVAL</div>
//               <div className="nav_menu_Outer">OUTER</div>
//               <div
//                 className="nav_menu_white"
//                 onMouseLeave={() => {
//                   // this.toggleTextMouseOver();
//                   this.setState({
//                     // hoveredText: '',
//                   });
//                 }}
//               >
//                 <div
//                   onMouseEnter={() => {
//                     this.setState({
//                       hoveredText: 'women',
//                       isMouseTextOver: true,
//                       isSearch: false,
//                     });
//                   }}
//                   // onMouseLeave={() => {
//                   //   this.toggleTextMouseOver();
//                   //   this.setState({
//                   //     isMouseOver: false,
//                   //   });
//                   // }}
//                 >
//                   WOMEN
//                 </div>
//                 <div
//                   onMouseEnter={() => {
//                     this.setState({
//                       hoveredText: 'men',
//                       isMouseTextOver: true,
//                       isSearch: false,
//                     });
//                   }}
//                   // onMouseLeave={() => {
//                   //   this.toggleTextMouseOver();
//                   //   this.setState({
//                   //     isMouseOver: false,
//                   //   });
//                   // }}
//                 >
//                   MEN
//                 </div>
//                 <div
//                   onMouseEnter={() => {
//                     this.setState({
//                       hoveredText: 'kids',
//                       isMouseTextOver: true,
//                       isSearch: false,
//                     });
//                   }}
//                   // onMouseLeave={() => {
//                   //   this.toggleTextMouseOver();
//                   //   this.setState({
//                   //     isMouseOver: false,
//                   //   });
//                   // }}
//                 >
//                   KIDS
//                 </div>
//                 <div
//                   onMouseEnter={() => {
//                     this.setState({
//                       hoveredText: 'collaboration',
//                       isMouseTextOver: true,
//                       isSearch: false,
//                     });
//                   }}
//                   // onMouseLeave={() => {
//                   //   this.toggleTextMouseOver();
//                   //   this.setState({
//                   //     isMouseOver: false,
//                   //   });
//                   // }}
//                 >
//                   COLLABORATION
//                 </div>
//                 <div
//                   onMouseEnter={() => {
//                     this.setState({
//                       hoveredText: 'community',
//                       isMouseTextOver: true,
//                       isSearch: false,
//                     });
//                   }}
//                   // onMouseLeave={() => {
//                   //   this.toggleTextMouseOver();
//                   //   this.setState({
//                   //     isMouseOver: false,
//                   //   });
//                   // }}
//                 >
//                   COMMUNITY
//                 </div>

//                 {true && (
//                   <div className="Drop_down">
//                     <div className="Drop_down_left">
//                       {nav_map
//                         .get(this.state.hoveredText)
//                         .first_menu.map((el, idx) => {
//                           return <div key={idx}>{el.title}</div>;
//                         })}
//                     </div>

//                     <div className="Drop_down_center">
//                       <div>
//                         {nav_map
//                           .get(this.state.hoveredText)
//                           .second_menu.map((el, idx) => {
//                             return <div key={idx}>{el.title}</div>;
//                           })}
//                       </div>
//                     </div>

//                     <div className="Drop_down_right">
//                       <div>
//                         {nav_map
//                           .get(this.state.hoveredText)
//                           .third_menu.map((el, idx) => {
//                             return (
//                               <div key={idx}>
//                                 {<img alt="category_image" src={el.img_src} />}
//                               </div>
//                             );
//                           })}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="profile">
//             <div>
//               <i class="fas fa-user" />
//             </div>
//             <div>
//               <i class="far fa-heart" />
//             </div>
//             <div onClick={this.searchButton}>
//               <i class="fas fa-search" />
//             </div>
//             <div>
//               <i class="fas fa-shopping-basket" />
//             </div>
//           </div>
//         </div>

//         {this.state.isSearch && (
//           <div className="searchbox">
//             <Searchbox />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default Nav;

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
    window.location.href = 'http://localhost:3000/main';
  };

  goToMyProfile = () => {
    window.location.href = 'http://localhost:3000/users/signin';
  };

  goToWomenOuter = () => {
    window.location.href = 'http://localhost:3000/products';
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY !== 0) {
        this.setState({
          isMouseOver: true,
        });
      }
    };
  }
  componentDidUpdate() {
    window.onscroll = () => {
      if (window.scrollY !== 0) {
        this.setState({
          isMouseOver: true,
          scroll: true,
        });
      } else {
        this.setState({
          isMouseOver: false,
          scroll: false,
        });
      }
    };
  }

  render() {
    return (
      <div>
        {this.state.isMouseOver && this.state.hoveredText !== '' && (
          <div className="background"></div>
        )}
        <div
          className={this.state.scroll === true ? 'Nav2' : 'Nav'}
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
              <div>
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
      </div>
    );
  }
}

export default Nav;
