import React from "react";

class Header extends React.Component {
  render() {
    const user = {
      email: 'admin@moonda.com'
    };

    return (
      <header className="header">
        <span className="item left title">Moonda admin page</span>

        <span className="item right">
          <a id="logout" className="muted" href="/login">로그아웃</a>
        </span>
        <span className="item right divider"></span>
        <span className="item right">{user.email}</span>
      </header>
    );
  }
}

export default Header;
