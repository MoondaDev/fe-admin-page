import React from "react";

class Header extends React.Component {
  getUserEmail() {
    // TODO: <use login API> to get user email
    return 'admin@moonda.com';
  }

  onLogout() {
    // TODO: <use login API> to send logout request
    if (window.confirm('로그아웃 하시겠습니까?')) {
      window.location.href = '/login';
    }
  }

  render() {
    return (
      <header className="layout">
        <span className="item left title">Moonda admin page</span>

        <span className="item right" onClick={this.onLogout}>로그아웃</span>
        <span className="item right divider"></span>
        <span className="item right">{this.getUserEmail()}</span>
      </header>
    );
  }
}

export default Header;
