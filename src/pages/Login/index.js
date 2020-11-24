import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="center">
        <img className="logo" src="logo-with-title.png" alt="Moonda logo with title" />
        <form>
          <div className="login-box">
            <div className="login-input-container">
              <InputSection label="ID"
                type="text"
                placeholder="Enter your ID"
              />
              <InputSection label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button className="login-button" type="submit">Log in</button>
          </div>
        </form>
      </div>
    );
  }
}

class InputSection extends React.Component {
  // 로그인 박스에서 2단 행을 이루는 input영역의 각 행에 해당
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <div className="login-input-row">
        <label className="login-input-label">{label}</label>
        <input className="login-input-input"
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default LoginPage;
