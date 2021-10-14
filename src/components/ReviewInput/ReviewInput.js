import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './ReviewInput.scss';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      review_content: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  resetEx = e => {
    e.target.placeholder = '';
  };

  reviewInput = () => {
    fetch('http://192.168.0.133:8000/postings', {
      method: 'POST',
      body: JSON.stringify({
        review_image: this.state.review_image,
        review_content: this.state.review_content,
        product_id: this.props.location.state.product_id,
        title: '1',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_NOTEXIST') {
          alert('리뷰가 정상적으로 등록되지 않았습니다.');
        } else {
          this.props.history.push(
            `/products/${this.props.location.state.product_id}`
          );
        }
      });
  };

  render() {
    console.log(this.props);
    return (
      <div className="ReviewInput">
        <div className="review_input_wrapper">
          <div className="labeltitle">
            <div className="review_photo_input_title">사진 첨부(선택)</div>
            <div className="review_photo_input_sub">
              사진을 첨부해주세요. (최대 1장)
            </div>
          </div>
          <label className="input_file_button" for="image_upload">
            <i className="far fa-image"></i>
            사진 첨부하기
          </label>
          <input
            id="image_upload"
            name="review_image"
            multiple="multiple"
            type="file"
            formEncType="multipart/form-data"
            style={{ display: 'none' }}
            onChange={this.handleImgInput}
          />
          <input
            name="review_title"
            type="text"
            style={{ display: 'none' }}
            onChange={this.handleInput}
            onClick={this.props.handleModal}
          />
          <div className="review_mid">
            <div>
              <span className="review">리뷰작성</span>
              <span className="review_span">필수입력 항목 입니다.</span>
            </div>
            <input
              className="review_content"
              placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다.
        (최소 10자 이상)"
              onChange={this.handleInput}
              onClick={this.resetEx}
            ></input>
          </div>
          <div>
            <form type="submit">
              <button
                type="submit"
                className="submit_btn"
                onClick={this.reviewInput}
              >
                완료
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewInput);
