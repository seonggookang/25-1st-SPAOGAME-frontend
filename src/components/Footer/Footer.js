import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="about_company">
          <div className="footer_section01">
            <p className="phone">1234-1234</p>
            <p className="work_time">
              상담시간 : 오전10시~오후5시 (토요일, 공휴일 휴무)
            </p>
            <p className="email">email : spao@eland.co.kr</p>
            <p className="company_info">
              (주)이랜드월드패션사업부 사업자등록번호 : 113-85-19030
              [사업자정보확인] 통신판매업 신고번호 : 제 2005-01053 호 대표이사 :
              최운식/최종양 서울특별시 금천구 가산디지털1로 159 (가산동)
              이랜드가산동사옥 개인정보 보호책임자 : 최운식 사옥 주소로 상품을
              발송하시면 교환ㆍ환불이 불가하므로, 교환ㆍ환불은 사이트 내에서
              신청해주시기 바랍니다.
            </p>
            <div class="sns">
              <div>
                <i className="fab fa-instagram" />
              </div>
              <div>
                <i className="fab fa-youtube" />
              </div>
              <div>
                <i className="fab fa-facebook-square" />
              </div>
            </div>
          </div>
          <div className="footer_section02">
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

        <div className="footer_section03">
          Copyright ⓒ by 스파오닷컴 All Right Reserved. 호스팅 서비스 제공자 :
          스파오게임(주)
        </div>
      </footer>
    );
  }
}

export default Footer;
