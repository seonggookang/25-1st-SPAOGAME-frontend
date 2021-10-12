import React, { Component } from 'react';
import './ReviewInput.scss';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      review_image: [],
      review_content: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reviewInput = () => {
    fetch('http://10.58.6.202:8000/users/review/', {
      method: 'POST',
      body: JSON.stringify({
        review_image: this.state.review_image,
        review_content: this.state.review_content,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'INVALID_USER') {
          alert('비밀번호가 올바르지 않습니다!');
        } else {
          alert('로그인 성공!');
          this.props.histoy.push('/subject');
        }
      });
  };
  render() {
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
            multiplt="multiple"
            type="file"
            style={{ display: 'none' }}
            onChange={this.handleInput}
          />
          <div className="review_mid">
            <div>
              <span className="review">리뷰작성</span>
              <span className="review_span">필수입력 항목 입니다.</span>
            </div>
            <input
              name="review_content"
              className="review_content"
              placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다.
        (최소 10자 이상)"
              onChange={this.handleInput}
            ></input>
          </div>
          <div>
            <form type="submit">
              <button type="submit" className="submit_btn">
                완료
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewInput;
