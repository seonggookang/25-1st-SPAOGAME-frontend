import React from 'react';
import { BASE_URL } from '../config';
import '../pages/Signup.scss';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      checkpassword: '',
      name: '',
      address1: '',
      address2: '',
      gender: '',
      mobile_number: '',
      birthday: '',
      email: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    const {
      year,
      month,
      day,
      first_number,
      second_number,
      last_number,
      user_email,
      emailaddress,
    } = this.state;

    this.setState({
      [name]: value,
      birthday: year + '-' + month + '-' + day,
      mobile_number: first_number + second_number + last_number,
      email: user_email + '@' + emailaddress,
    });
  };

  goToSignin = () => {
    const {
      username,
      password,
      name,
      email,
      mobile_number,
      address1,
      address2,
      birthday,
      gender,
    } = this.state;

    this.props.history.push('/users/signin');
    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
        name: name,
        email: email,
        mobile_number: mobile_number,
        address1: address1,
        address2: address2,
        birthday: birthday,
        gender: gender,
      }),
    })
      .then(response => response.json())
      .then(result => console.log(''));
  };

  goToMain = () => {
    this.props.history.push('/components/Main/Main.js');
  };

  render() {
    const special = /[~!@#$%^&*()_+|<>?:{}]/;

    const {
      username,
      password,
      checkpassword,
      name,
      email,
      mobile_number,
      birthday,
      gender,
    } = this.state;

    const isValidSignup =
      username.includes('@') &&
      special.test(password) &&
      password.length >= 8 &&
      password === checkpassword &&
      name.length >= 2 &&
      email &&
      mobile_number.length >= 11 &&
      birthday &&
      gender;

    const year = Array.from({ length: 101 }).map((el, idx) => 2021 - idx);
    year.unshift('선택');

    const month = Array.from({ length: 12 }).map((el, idx) => idx + 1);
    month.unshift('선택');

    const day = Array.from({ length: 31 }).map((el, idx) => idx + 1);
    day.unshift('선택');

    return (
      <main className="signup_wrapper">
        <div className="header">
          <div className="head_title">
            <h1>SPAOGAME 멤버십</h1>
          </div>
          <div className="membership_text">
            <h1>SPAOGAME 회원가입</h1>
          </div>
        </div>
        <section className="signup_container">
          <form className="signup_form">
            <div className="membership_subtitle">
              <span>기본정보</span>
              <p>
                (<span className="essential">*</span>)표시는 필수입력항목입니다.
              </p>
            </div>
            <table
              className="signup_table"
              cellSpacing="0"
              summary="사용자이름,회원아이디,비밀번호,생일,휴대폰번호,기본주소,상세주소,전자우편주소,성별"
            >
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      이름
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td>
                    <input
                      className="name_input"
                      name="name"
                      onChange={this.handleInput}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      회원아이디
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td>
                    <input
                      className="id_input"
                      name="username"
                      onChange={this.handleInput}
                    />
                    <button onClick={this.idCheck}>아이디 중복체크</button>
                    <p className="notice">이메일 형식으로 입력해주세요.</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      비밀번호
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td>
                    <input
                      className="password_input"
                      type="password"
                      name="password"
                      onChange={this.handleInput}
                    />
                    <p className="notice">
                      연속적인 숫자나 생일, 전화번호 등 추측하기 쉬운 개인정보
                      및 아이디와 비슷한 전화번호 사용을 피하시기 바랍니다.
                      비밀번호는 특수기호를 포함한 3가지 이상을 혼합하여
                      입력하세요.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      비밀번호재입력
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td>
                    <input
                      className="password_input"
                      type="password"
                      name="checkpassword"
                      onChange={this.handleInput}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      생년월일
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td className="user_birth">
                    <div className="selectBox">
                      <label className="user_year">{/*년*/}</label>
                      <select
                        value={this.state.value}
                        className="signup_birth"
                        name="year"
                        onChange={this.handleInput}
                      >
                        {year.map(el => (
                          <option value={el}>{el}</option>
                        ))}
                      </select>
                      <span>년</span>
                    </div>
                    <div className="selectBox">
                      <label className="user_month">{/*month*/}</label>
                      <select
                        className="signup_birth"
                        name="month"
                        value={this.state.value}
                        onChange={this.handleInput}
                      >
                        {month.map(el => (
                          <option value={el}>{el}</option>
                        ))}
                      </select>
                      <span>월</span>
                    </div>
                    <div className="selectBox">
                      <label className="user_date">{/*date*/}</label>
                      <select
                        value={this.state.value}
                        className="signup_birth"
                        name="day"
                        onChange={this.handleInput}
                      >
                        {day.map(el => (
                          <option value={el}>{el}</option>
                        ))}
                      </select>
                      <span>일</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_gender">
                      성별
                      <span className="essential_input">*</span>
                    </div>
                  </th>
                  <td>
                    <select
                      className="select_gender"
                      name="gender"
                      onChange={this.handleInput}
                    >
                      <option value>선택</option>
                      <option value="1">남자</option>
                      <option value="2">여자</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      핸드폰번호
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td className="user_phonenumber">
                    <div className="search_box">
                      <label>{/*phonenumber*/}</label>
                      <select
                        value={this.state.value}
                        className="signup_phonenumber"
                        name="first_number"
                        onChange={this.handleInput}
                      >
                        <option value>선택</option>
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="017">017</option>
                        <option value="018">018</option>
                        <option value="019">019</option>
                      </select>
                    </div>
                    <span>-</span>
                    <input
                      className="signup_phonenumber2"
                      title="중간자리"
                      maxLength="4"
                      name="second_number"
                      onChange={this.handleInput}
                    />
                    <span>-</span>
                    <input
                      className="signup_phonenumber2"
                      title="마지막자리"
                      maxLength="4"
                      name="last_number"
                      onChange={this.handleInput}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">주소</div>
                  </th>
                  <td className="td_address">
                    <input
                      className="user_adress"
                      title="주소"
                      name="address1"
                      onChange={this.handleInput}
                    />
                    <button>
                      <span>주소찾기</span>
                    </button>
                    <div className="user_lastaddress">
                      <input
                        className="user_adress"
                        title="나머지 주소"
                        name="address2"
                        onChange={this.handleInput}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="signup_information">
                      이메일
                      <span className="essential_input" title="필수입력">
                        *
                      </span>
                    </div>
                  </th>
                  <td className="user_email">
                    <input
                      className="email_id"
                      title="이메일아이디"
                      name="user_email"
                      onChange={this.handleInput}
                    />
                    <span>@</span>
                    <input
                      className="email_id"
                      title="이메일주소"
                      name="emailaddress"
                      onChange={this.handleInput}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="signup_button">
              <button className="cancel_button" onClick={this.goToMain}>
                <span className="cancel_message">가입취소</span>
              </button>
              <button
                className="submit_button"
                disabled={!isValidSignup}
                onClick={this.goToSignin}
              >
                <span className="submit_message">제출하기</span>
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Signup;
