import React from 'react';
import './Footer.scss';

// 함수,변수는 카멜
// 클래스네임 스네이크
class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer_wrapper">
          <div className="About_company">
            <div className="Footer_section01">
              <p className="phone">1234-1234</p>
              <p className="work_time">
                상담시간 : 오전10시~오후5시 (토요일, 공휴일 휴무)
              </p>
              <p className="email">email : spao@eland.co.kr</p>
            </div>
            <div className="Footer_section02">
              <ul className="section02_01">
                <li>브랜드 소개</li>
                <li>오프라인 매장안내</li>
              </ul>
              <ul className="section02_02">
                <li>개인정보 처리방침</li>
                <li>약관안내</li>
                <li>윤리경영</li>
              </ul>
              <ul className="section02_03">
                <li>공지사항</li>
                <li>회원혜택</li>
                <li>채용정보 및 인사제도</li>
                <li>자주묻는질문 FAQ</li>
              </ul>
            </div>
          </div>

          <div className="Footer_section03">3</div>
        </div>
      </div>
    );
  }
}

export default Footer;
