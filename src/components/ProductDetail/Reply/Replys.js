import React, { Component } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import './Replys.scss';

class Replys extends Component {
  constructor() {
    super();
  }

  handleDelete = reply => {
    this.props.onDelete(reply);
  };

  handleAdd = replyInput => {
    this.props.onAdd(replyInput);
  };

  render() {
    return (
      <>
        <div
          className="replys_wrapper"
          ref={this.messagesEndRef}
          onChange={this.scrollBottom}
        >
          {this.props.replys.map(reply => (
            <Reply
              key={reply.comment_id}
              reply={reply}
              comment_content={reply.comment_content}
              comment_writer={reply.comment_writer}
              onDelete={this.handleDelete}
              conmment_id={reply.comment_id}
            />
          ))}
        </div>
        <ReplyInput
          onAdd={this.handleAdd}
          hadleAddByEnter={this.props.hadleAddByEnter}
          posting_id={this.props.posting_id}
        />
      </>
    );
  }
}

export default Replys;
