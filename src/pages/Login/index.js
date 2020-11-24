import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="center">
        <img
          className="logo"
          alt="Moonda logo with title"
          src="logo-with-title.png"
        />
        <form>
          <div className="login-box">
            <div className="login-input-container">
              <div className="login-input-row">
                <label className="login-input-label">ID</label>
                <input
                  className="login-input-input"
                  type="text"
                  placeholder="Enter your ID"
                />
              </div>
              <div className="login-input-row">
                <label className="login-input-label">Password</label>
                <input
                  className="login-input-input"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              className="login-button"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
