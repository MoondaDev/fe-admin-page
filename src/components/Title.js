import React from "react";

class Title extends React.Component {
  componentDidMount() {
    if (typeof this.props.children == 'string')
      window.document.title = this.props.children;
  }

  render() {
    return (
      <h1 className="component title">{this.props.children}</h1>
    );
  }
}

export default Title;
