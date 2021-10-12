import React from 'react';
import './Main.scss';

class Main extends React.Component {
  // nav bar hover시 main의 opacity 0.5? 아니면 조금 어둡게?
  // 그냥 여기서의 밝기 state를 따로 만들어줘야하나?
  constructor() {
    super();
    this.state = {
      isClicked: false,
      count: 1,
    };
  }

  handleLeft = () => {
    let newCount = this.state.count + 1;
    this.setState(prev => ({
      isClicked: !prev.isClicked,
      count: newCount,
    }));
    if (this.state.count === 4) {
      this.setState({
        count: 1,
      });
    }
  };

  handleright = () => {
    let newCount = this.state.count - 1;
    this.setState(prev => ({
      isClicked: !prev.isClicked,
      count: newCount,
    }));
    if (this.state.count === 1) {
      this.setState({
        count: 4,
      });
    }
  };

  // interval;

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     console.log('abcd');
  //     this.setState({
  //       // 이미지 변경함수??
  //     });
  //   }, 1000);
  // }
  // componentDidUpdate() {}
  // componentWillUnmount() {
  //   // clearInterval(this.interval);
  // }
  //비동기 함수 바깥에 있는 변수를 참조하면 클로저 문제 발생
  render() {
    return (
      <div className="Main">
        <div className="images">
          <img
            alt="mainPicture"
            src={`images/main_${this.state.count}.png`}
            height="600em"
            width="1380px"
          />
        </div>

        <div className="left_button" onClick={this.handleLeft}>
          <i className="fa fa-chevron-left" />
        </div>

        <div className="right_button" onClick={this.handleright}>
          <i className="fa fa-chevron-right" />
        </div>

        <div>Main입니다</div>
      </div>
    );
  }
}

export default Main;
