import React, { Component } from 'react';
import './PageBtn.scss';

class PageBtn extends Component {
  render() {
    return (
      <div className="page">
        <button className="page_btn" name="1" onClick={this.props.pageBtn}>
          1
        </button>
        <button className="page_btn" name="2" onClick={this.props.pageBtn}>
          2
        </button>
        <button className="page_btn" name="3" onClick={this.props.pageBtn}>
          3
        </button>
        <button className="page_btn" name="4 " onClick={this.props.pageBtn}>
          4
        </button>
        <button className="page_btn" name="5" onClick={this.props.pageBtn}>
          5
        </button>
      </div>
    );
  }
}

export default PageBtn;
