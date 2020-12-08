import styled, { css } from "styled-components";

const defaultStyle = css`
  padding: .3rem 2rem;
  border: 1px solid #d7d7d7;
  background-color: #efefef;
  cursor: pointer;
`;

const GreenButton = styled.button`
  ${defaultStyle}
  color: #00C853;
`;

const BlueButton = styled.button`
  ${defaultStyle}
  color: #00B0FF;
`;

const GrayButton = styled.button`
  ${defaultStyle}
  color: #727272;
`;

export {
  GrayButton as default,

  GrayButton,
  BlueButton,
  GreenButton,
};
