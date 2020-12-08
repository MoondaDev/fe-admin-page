import styled, { css } from "styled-components";

const defaultButtonStyle = css`
  min-width: 6rem;
  margin-left: .3rem;
  margin-right: .3rem;
  padding: .3rem 1.6rem;
  border: 1px solid #d7d7d7;
  background-color: #efefef;
  font-size: .8rem;
  text-align: center;
  cursor: pointer;
  
  transition: background-color .1s ease;
  -webkit-transition: background-color .1s ease;

  &:hover {
    background-color: #d7d7d7;
  }

  &:first-child {
    margin-left: 0rem;
  }

  &:last-child {
    margin-right: 0rem;
  }
`;

const inlineButtonStyle = css`
  padding: .2rem 1rem;
  border: 1px solid #d7d7d7;
  background-color: #efefef;
  font-size: .6rem;
  cursor: pointer;
  
  transition: background-color .1s ease;
  -webkit-transition: background-color .1s ease;

  &:hover {
    background-color: #d7d7d7;
  }
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
