import React, { PureComponent } from 'react';
import './ReplyInput.scss';

class Reply extends PureComponent {
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const replyInput = this.inputRef.current.value;
    replyInput && this.props.onAdd(replyInput);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="reply_submit" onSubmit={this.onSubmit}>
        <span className="reply_wrapper">
          <input className="reply" ref={this.inputRef} />
          <button
            className="reply_btn"
            onKeyPress={this.props.handleAddByEnter}
          >
            댓글작성
          </button>
        </span>
      </form>
    );
  }
}

export default Reply;
