import React from 'react';
import Nav from '../Nav/Nav';
import Carousel from '../Nav/Carousel';
import IMAGE_DATA from '../Nav/IMAGE_DATA';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handleLeft = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
    if (this.state.count === 4) {
      this.setState({
        count: 1,
      });
    }
  };

  handleRight = () => {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount,
    });
    if (this.state.count === 1) {
      this.setState({
        count: 4,
      });
    }
  };

  handleUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleDown = () => {
    window.scrollTo({ top: 12222, behavior: 'smooth' });
  };

  render() {
    return (
      <>
        <Nav isMain />
        <div className="Main">
          <div className="images">
            <img
              alt="mainPicture"
              src={`/images/main_${this.state.count}.png`}
            />
          </div>

          <div className="arrow_container">
            <div className="left_button" onClick={this.handleLeft}>
              <i className="fa fa-chevron-left" />
            </div>

            <div className="right_button" onClick={this.handleRight}>
              <i className="fa fa-chevron-right" />
            </div>
          </div>

          <div className="main">AUTUMN OUTER</div>
          <Carousel images={IMAGE_DATA} />
        </div>
      </>
    );
  }
}

export default Main;
