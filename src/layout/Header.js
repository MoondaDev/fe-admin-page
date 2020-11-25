import React from "react";

class Header extends React.Component {
  getUserEmail() {
    // TODO: <use login API> to get user email
    return 'admin@moonda.com';
  }

  render() {
    return (
      <header className="layout">
        <span className="item left title">Moonda admin page</span>

        <span className="item right">
          <a id="logout" className="muted" href="/login">로그아웃</a>
        </span>
        <span className="item right divider"></span>
        <span className="item right">{this.getUserEmail()}</span>
      </header>
    );
  }
}

export default Header;
