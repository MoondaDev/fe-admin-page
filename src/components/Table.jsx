import styled, { css } from "styled-components";

const defaultStyle = css`
  width: 100%;
  border-collapse: collapse;

  &, & * {
    border: 2px solid #424242;
  }

  & input[type="checkbox"] {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
  }

  & input[type="text"] {
    width: 100%;
    height: 1.4em;
  }

  & > thead {
    background-color: #D7D7D7;

    & th {
      padding: .5rem;
      text-align: center;
    }
  }

  & > tbody {
    background-color: #F7F7F7;

    & td {
      padding: 1rem;
      line-height: 1.2em;
      text-align: center;
    }
  }
`;

const LargeTable = styled.table`
  ${defaultStyle}
  font-size: .8rem;

  & td {
    font-size: .8rem;
  }
`;

const NormalTable = styled.table`
  ${defaultStyle}
  font-size: 1rem;

  & td {
    font-size: 1rem;
  }
`;

export {
  NormalTable as default,

  NormalTable,
  LargeTable
};
