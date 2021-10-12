import React, { Component } from 'react';
import './Reply.scss';

class Reply extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.reply);
  };
  render() {
    const { comment_content, comment_writer } = this.props;
    return (
      <div className="replys">
        <div className="reply_left">
          <span className="owner-id">
            <b>{comment_writer}</b>
          </span>
          <span className="owner_content">{comment_content}</span>
        </div>

        <button className="delete_btn" onClick={this.handleDelete}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    );
  }
}

export default Reply;
