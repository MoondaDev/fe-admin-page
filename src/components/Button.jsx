import styled, { css } from "styled-components";

const defaultButtonStyle = css`
  padding: .3rem 2rem;
  border: 1px solid #d7d7d7;
  background-color: #efefef;
  font-size: .8rem;
  cursor: pointer;
`;

const inlineButtonStyle = css`
  padding: .2rem 1rem;
  border: 1px solid #d7d7d7;
  background-color: #efefef;
  font-size: .6rem;
  cursor: pointer;
`;

const GreenButton = styled.button`
  ${defaultButtonStyle}
  color: #00C853;
`;

const BlueButton = styled.button`
  ${defaultButtonStyle}
  color: #00B0FF;
`;

const GrayButton = styled.button`
  ${defaultButtonStyle}
  color: #9E9E9E;
`;

const RedButton = styled.button`
  ${defaultButtonStyle}
  color: #F44336;
`;

const GrayInlineButton = styled.button`
  ${inlineButtonStyle}
  color: #9E9E9E;
`;

export {
  GrayButton as default,

  GrayButton,
  BlueButton,
  GreenButton,
  RedButton,

  GrayInlineButton,
};
