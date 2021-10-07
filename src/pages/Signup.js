import React from 'react';
import '../pages/Signup.scss';

class Signup extends React.Component {
  render() {
    return (
      <main className="signup_wrapper">
        <div className="header">
          <div className="head_title">
            <h1>SPAOGAME 멤버십</h1>
          </div>
          <div className="membership_text">
            <h1>SPAOGAME 회원가입</h1>
          </div>
          <div className="membership_subtitle">
            <span>기본정보</span>
            <span className="membership_essential">
              (*)표시는 필수입력항목입니다.
            </span>
          </div>
        </div>
        <section className="signup_container">
          <div className="signup_wrap">
            <form claaName="signup_form">
              <div className="signup_field">
                <table
                  cellspacing="0"
                  summary="사용자이름,회원아이디,비밀번호,생일,휴대폰번호,기본주소,상세주소,전자우편주소,성별"
                >
                  <colegroup>
                    <col className="signup_key" />
                    <col className="signup_value" />
                  </colegroup>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="user_name">
                          이름
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td>
                        <input className="name_input" name="name" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_id">
                          회원아이디
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td>
                        <input className="id_input" name="username" />
                        <button>아이디 중복체크</button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_password">
                          비밀번호
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td>
                        <input className="password_input" name="password" />
                        <p className="notice">
                          연속적인 숫자나 생일, 전화번호 등 추측하기 쉬운
                          개인정보 및 아이디와 비슷한 전화번호 사용을 피하시기
                          바랍니다. 비밀번호는 특수기호를 포함한 3가지 이상을
                          혼합하여 입력하세요.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="repeat_password">
                          비밀번호재입력
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td>
                        <input className="password_input" name="password" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_birth">
                          생년월일
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td className="user_birth">
                        <div className="selectBox">
                          <label for="year" className="user_year">
                            {/*year*/}
                          </label>
                          <select className="signup_year" name="birthday">
                            <option value>선택</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                            <option value="1921">1921</option>
                          </select>
                        </div>
                        <span>년</span>
                        <div className="selectBox">
                          <label for="month" className="user_month">
                            {/*month*/}
                          </label>
                          <select className="signup_month" name="birthday">
                            <option value>선택</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                        </div>
                        <span>월</span>
                        <div className="selectBox">
                          <label for="date" className="user_date">
                            {/*date*/}
                          </label>
                          <select className="signup_date" name="birthday">
                            <option value>선택</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                          </select>
                        </div>
                        <span>일</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_phonenumber">
                          핸드폰번호
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td className="user_firsphonenum">
                        <div className="search_box">
                          <label for="phonenumber">{/*phonenumber*/}</label>
                          <select className="signup_phonenumber">
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
                        />
                        <span>-</span>
                        <input
                          className="signup_phonenumber3"
                          title="마지막자리"
                          maxLength="4"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_adress">주소</div>
                      </th>
                      <td className="td_address">
                        <input className="adress" title="주소" />
                        <button>
                          <span>주소찾기</span>
                        </button>
                        <div className="user_lastaddress">
                          <input className="last_adress" title="나머지 주소" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="user_email">
                          이메일
                          <span className="essential_input" title="필수입력">
                            *
                          </span>
                        </div>
                      </th>
                      <td className="user_email">
                        <input className="email_id" title="이메일아이디" />
                        <span>@</span>
                        <input className="emali_pw" title="이메일주소" />
                        <div className="email_selectbox">
                          <select className="select_adress">
                            <option value>직접입력</option>
                            <option value="naver.com">naver.com</option>
                            <option value="nate.com">nate.com</option>
                            <option value="daum.net">daum.net</option>
                            <option value="gmail.com">gmail.com</option>
                            <option value="yahoo.com">yahoo.com</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            <div className="signup_button">
              <button className="cancel_button">
                <span>가입취소</span>
              </button>
              <button className="submit_button">
                <span>제출하기</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Signup;
