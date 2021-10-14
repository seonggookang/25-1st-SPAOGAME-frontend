import React, { Component, createRef } from 'react';
import './Review.scss';

class Review extends Component {
  render() {
    const {
      posting_image,
      posting_content,
      posting_writer,
      posting_date,
      posting_id,
    } = this.props;
    return (
      <div className="review_wrapper">
        <div className="review_left">
          <div className="review_content">{posting_content}</div>
          {posting_image.map(item => (
            <img
              className="review_photo"
              alt="후기사진"
              src={item}
              id={posting_id}
            />
          ))}
        </div>
        <div className="review_right">
          <ul>
            <li>
              <div className="posting_title">작성자</div>
              <div className="posting_content">{posting_writer}</div>
            </li>
            <hr />
            <li>
              <div className="posting_title">작성일</div>
              <div className="posting_content">{posting_date}</div>
              <hr />
            </li>
          </ul>
        </div>
        <div className="insteadOfHr"></div>
      </div>
    );
  }
}

export default Review;
