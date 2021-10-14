import React from 'react';
import '../pages/Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  goToMain = () => {
    this.props.history.push('/users/Main');
    fetch('http://192.168.0.133:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          alert('로그인 되었습니다.');
          this.props.history.push('/users/Main');
        } else {
          alert('아이디와 비밀번호를 확인하세요');
        }
      });
  };

  goToSignup = () => {
    this.props.history.push('/users/signup');
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.goToMain();
    }
  };

  render() {
    const { email, password } = this.state;
    const special = /[~!@#$%^&*()_+|<>?:{}]/;
    const isValidButton =
      email.includes('@') && password.length >= 8 && special.test(password);
    return (
      <main className="login_pages">
        <section className="login_form">
          <div className="loginform_border">
            <h1>로그인</h1>
            <div className="login_section">
              <span className="information_text">SPAOGAME 회원 로그인</span>
            </div>
            <div className="login_box">
              <div className="login_input">
                <div className="login_input_button">
                  <div className="userid_password">
                    <input
                      className="user_id"
                      placeholder="아이디"
                      name="email"
                      onChange={this.handleInput}
                    />
                    <input
                      className="user_password"
                      type="password"
                      placeholder="비밀번호"
                      name="password"
                      onChange={this.handleInput}
                      onKeyPress={this.pressEnter}
                    />
                  </div>
                  <button
                    className={isValidButton ? 'activeButton' : 'disabled'}
                    type="button"
                    disabled={!isValidButton}
                    onClick={this.goToMain}
                  >
                    로그인
                  </button>
                </div>
                <div className="save_userid">
                  <span className="id_checkbox">
                    <input type="checkbox" name="save_id" />
                  </span>
                  <label className="save_userid_text">아이디 저장</label>
                </div>
              </div>
              <ul className="find_user_information_list">
                <div className="find_list">
                  <li>
                    아이디 / 비밀번호를 분실하셨습니까?
                    <button className="find_id">아이디 찾기</button>
                    <button className="find_password">비밀번호 찾기</button>
                  </li>
                </div>
                <div className="join_the_membership">
                  <li>
                    SPAO 멤버십 회원이 아니신가요?
                    <button
                      className="join_membership"
                      onClick={this.goToSignup}
                    >
                      회원가입
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Login;
