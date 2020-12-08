import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 1.6rem;
`;

class Title extends React.Component {
  componentDidMount() {
    if (typeof this.props.children == 'string')
      window.document.title = this.props.children;
  }

  render() {
    return (
      <Heading>{this.props.children}</Heading>
    );
  }
}

export default Title;
