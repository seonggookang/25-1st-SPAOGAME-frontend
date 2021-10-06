import React from 'react';
import './Main.scss';

class Main extends React.Component {
  // TimerSwitch = () => {
  //   let TimerRunning = true;
  //   let tiemr = setTimeout(function () {
  //     SwitchPic(pic);
  //   }, 2000);
  // };
  // SwitchPic = () => {};

  render() {
    return (
      <div className="Main">
        <img src="images/coffee.jpg" width="100%" height="500px" />
        <div>
          <br />
          <br />
          <br />
          <br />
          Main입니다
        </div>
      </div>
    );
  }
}

export default Main;
