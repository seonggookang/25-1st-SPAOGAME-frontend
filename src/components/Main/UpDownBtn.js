import React from 'react';

class UpDownBtn extends React.Component {
  handleUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  handleDown = () => {
    window.scrollTo({ top: 12222, behavior: 'smooth' });
  };
  render() {
    return (
      <>
        <div className="up_button" onClick={this.handleUp}>
          <i className="fa fa-arrow-circle-up" />
        </div>

        <div className="down_button" onClick={this.handleDown}>
          <i className="fa fa-arrow-circle-down" />
        </div>
      </>
    );
  }
}
