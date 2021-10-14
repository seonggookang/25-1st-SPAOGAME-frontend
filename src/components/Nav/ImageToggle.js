import React from 'react';

export default class ImageToggle extends React.Component {
  render() {
    return (
      <div>
        <img
          alt="spao logo"
          src={this.props.isMouseOver ? '/images/red.png' : '/images/white.png'}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
