import React from 'react';
import './Main.scss';
import '../Nav/Nav';

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
        {/* this.props를 이용해서 Nav바의 호버됐는지 체크하는것으로  호버 ?  */}
        <img alt="mainPicture" src="images/main_4.png" height="600em" />
        <div>Main입니다</div>
        {/* <div>{this.props}</div> */}
        {/* nav bar에 호버 된것을 이 메인 컴포넌트에서도 감지할수있나? */}
      </div>
    );
  }
}

export default Main;
