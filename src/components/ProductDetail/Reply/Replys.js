import React, { Component } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import './Replys.scss';

class Replys extends Component {
  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  handleAdd = replyInput => {
    this.props.onAdd(replyInput);
  };
  render() {
    return (
      <>
        <div className="replys_wrapper">
          {this.props.replys.map(reply => (
            <Reply
              key={reply.comment_id}
              reply={reply}
              comment_content={reply.comment_content}
              comment_writer={reply.comment_writer}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
        <ReplyInput
          onAdd={this.handleAdd}
          hadleAddByEnter={this.props.hadleAddByEnter}
        />
      </>
    );
  }
}

export default Replys;
