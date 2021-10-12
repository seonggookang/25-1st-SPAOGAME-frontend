import React, { Component } from 'react';
import './Description.scss';
class Description extends Component {
  render() {
    const { colors } = this.props;

    return (
      <div className="Description">
        <span className="description_title">색상: </span>
        {colors.map(color => (
          <span key={color} className="description_content">
            {color}
          </span>
        ))}
        <br />
        <span className="description_title">사이즈: </span>
        {this.props.size.map(size => (
          <span key={size} className="description_content">
            {size}
          </span>
        ))}
        <br />
        <span className="description_title">제조국: </span>
        <span className="description_content">한국</span>
        <br />
        <span className="description_title">제조사: </span>
        <span className="description_content">(주)스파오게임월드</span>
        <br />
        <span className="description_title">AS책임자: </span>
        <span className="description_content">
          고객센터 080-300-0456 (운영시간 09:00~18:00, 주말ㆍ공휴일은 쉽니다)
        </span>
        <br />
        <span className="description_title">품질보증기준: </span>
        <span className="description_content">
          상품수령후 7일이내에 신청하실수 있습니다.
          <br /> 단, 다음의 경우 해당하는 반품/교환은 신청이 불가능할 수
          있습니다.
          <br />
          -소비자의 책임있는 사유로 상품등이 멸실 또는 훼손된경우
          <br />
          -소비자의 사용 또는 소비에 의해 상품등의 가치가 현저히 감소한경우
          <br />
          -시간의 경과에 의해 재판매가 곤란할정도로 상품등의 가치가 현저히
          감소한경우
          <br />
          -복제가 가능한 상품등의 포장을 훼손한경우
          <br />
          -소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에 들어간경우
          <br />
        </span>
        <span className="description_title">취급시 주의사항: </span>
        <span className="description_content">
          자세한 주의사항은 상세페이지 참고해주세요.
          <br />
          지퍼/단추/스냅 등은 잠그신 후 뒤집어서 세탁해 주시기 바랍니다.
          <br />
          땀과 비 등에 의해 젖은 상태로 오래 방치 할 경우 변색의 우려가
          있습니다.
          <br />
          소비자 부주의로 인한 제품 손상은 보상 되지 않습니다.
          <br />
        </span>
        <br />
      </div>
    );
  }
}

export default Description;
