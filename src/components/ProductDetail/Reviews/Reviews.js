import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <div>
        {this.props.posting_info.map(item => (
          <Review
            key={item.posting_id}
            posting_writer={item.posting_writer}
            positing_title={item.posting_title}
            posting_content={item.posting_content}
            posting_image={item.posting_image}
            posting_date={item.posting_date}
            comment_info={this.props.comment_info}
          />
        ))}
      </div>
    );
  }
}

export default Reviews;
