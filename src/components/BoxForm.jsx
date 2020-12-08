import React from "react";
import styled from "styled-components";

const BoxFormContainer = styled.div`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 2px solid #d7d7d7;

  & form {
    display: block;
  }
`;

const BoxFormRow = styled.div`
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }

  & label {
    position: relative;
    display: inline-block;
    width: 10rem;
    padding-right: 2rem;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1rem;

    &::after {
      content: ":";
      position: absolute;
      top: 0;
      right: 1rem;
      display: inline-block;
    }
  }
`;

class BoxForm extends React.Component {
  render() {
    return (
      <BoxFormContainer>
        <form>
          {this.props.children}
        </form>
      </BoxFormContainer>
    );
  }
}

export {
  BoxForm as default,
  BoxForm,

  BoxFormRow,
};
