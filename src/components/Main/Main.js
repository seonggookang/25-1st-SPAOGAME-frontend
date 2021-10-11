import React from 'react';
import './Main.scss';

class Main extends React.Component {
  // nav bar hover시 main의 opacity 0.5? 아니면 조금 어둡게?
  // 그냥 여기서의 밝기 state를 따로 만들어줘야하나?
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  render() {
    return (
      <div className="Main">
        <img alt="mainPicture" src="images/main_4.png" height="600em" />
        <div className="left_button">
          <div>
            <i class="fa fa-chevron-left" />
          </div>
        </div>
        <div className="right_button">
          <div>
            <i class="fa fa-chevron-right" />
          </div>
        </div>
        <div>Main입니다</div>
      </div>
    );
  }
}

export default Main;
