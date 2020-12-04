import React from "react";

class Main extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <main className="layout">
        <div className="main-wrapper">
          {children}
        </div>
      </main>
    );
  }
}

export default Main;
