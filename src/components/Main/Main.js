import React from 'react';
import './Main.scss';

class Main extends React.Component {
  // nav bar hover시 main의 opacity 0.5? 아니면 조금 어둡게?
  // 그냥 여기서의 밝기 state를 따로 만들어줘야하나?
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
    window.scrollTo(0, 0);
  };

  handleDown = () => {
    window.scrollTo(0, 12200);
  };

  render() {
    return (
      <div className="Main">
        <div className="images">
          <img
            alt="mainPicture"
            src={`images/main_${this.state.count}.png`}
            height="500em"
            width="1380px"
          />
        </div>
        {/* 왼쪽 버튼 클릭시 이미지 transition 효과 */}
        <div className="left_button" onClick={this.handleLeft}>
          <i className="fa fa-chevron-left" />
        </div>
        {/* 오른쪽 버튼 클릭시 이미지 transition 효과 */}
        <div className="right_button" onClick={this.handleRight}>
          <i className="fa fa-chevron-right" />
        </div>

        <div className="main">Main</div>
        <img
          alt="mainPicture"
          src={`images/man_${this.state.count}.png`}
          height="600em"
          width="1380px"
        />
        <div className="up_button" onClick={this.handleUp}>
          <i className="fa fa-arrow-circle-up" />
        </div>

        <div className="down_button" onClick={this.handleDown}>
          <i className="fa fa-arrow-circle-down" />
        </div>
      </div>
    );
  }
}

export default Main;
