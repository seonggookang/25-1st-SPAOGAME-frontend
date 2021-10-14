import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import './ReplyInput.scss';

class Reply extends PureComponent {
  inputRef = React.createRef();
  onSubmit = event => {
    event.preventDefault();
    const replyInput = this.inputRef.current.value;
    replyInput && this.props.onAdd(replyInput);
    this.inputRef.current.value = '';
  };

  reviewInput = () => {
    fetch('http://10.58.0.205:8000/postings/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_content: this.inputRef.current.value,
        posting_id: this.props.posting_id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('비밀번호가 올바르지 않습니다!');
        } else {
          alert('로그인 성공!');
          this.props.history.push(`${this.props.location.pathname}`);
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <form className="reply_submit" onSubmit={this.onSubmit}>
        <span className="reply_wrapper">
          <input className="reply" ref={this.inputRef} />
          <button
            className="reply_btn"
            onKeyPress={this.props.handleAddByEnter}
            onClick={this.reviewInput}
          >
            댓글작성
          </button>
        </span>
      </form>
    );
  }
}

export default withRouter(Reply);
