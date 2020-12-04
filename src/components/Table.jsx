import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;

  &, & * {
    border: 2px solid #424242;
  }

  & > thead {
    background-color: #D7D7D7;

    & th {
      padding: .5rem;
      font-size: 1.2rem;
      text-align: center;
    }
  }

  & > tbody {
    background-color: #F7F7F7;
  
    & td {
      padding: 1rem;
      font-size: 1rem;
      line-height: 1.4rem;
      text-align: center;

      & > input {
        width: 1.4rem;
        height: 1.4rem;
        cursor: pointer;
      }
    }
  }
`;

class Table extends React.Component {
  render() {
    return <StyledTable>{this.props.children}</StyledTable>;
  }
}

export {
  Table as default,
};
