import React from "react";

class Main extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <main>
        {children}
      </main>
    );
  }
}

export default Main;
