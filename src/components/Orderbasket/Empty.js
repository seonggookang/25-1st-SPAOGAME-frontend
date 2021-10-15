import React from 'react';

class Empty extends React.Component {
  render() {
    return (
      <table className="vacant_basket">
        <thead>
          <td>장바구니가 비어있습니다.</td>
        </thead>
      </table>
    );
  }
}

export default Empty;
