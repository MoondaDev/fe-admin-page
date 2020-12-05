import React from "react";
import styled, { css } from "styled-components";
import { BASENAME } from "../Routes";

const BACKGROUND_COLOR = css`rgb(34, 42, 53)`;
const COLOR = css`rgb(255, 255, 255)`;
const HEIGHT = css`3.2rem`;

const Layout = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: ${HEIGHT};
  background-color: ${BACKGROUND_COLOR};
  color: ${COLOR};
`;

const LeftItem = styled.span`
  display: inline-block;
  height: 2rem;
  margin: .6rem 1.6rem 0rem 1.6rem;
  font-size: 1.4rem;
  line-height: 1.6rem;
  float: left;
`;

const RightItem = styled.span`
  display: inline-block;
  height: 2rem;
  margin: .6rem 1.6rem 0rem 1.6rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  float: right;

  ${props => props.onClick && css`
    cursor: pointer;
    opacity: 1;

    transition: opacity .1s ease;
    -webkit-transition: opacity .1s ease;
    
    &:hover {
      opacity: .75;
    }
  `}
`;

const RightItemDivider = styled.span`
  display: inline-block;
  width: 1px;
  height: 2rem;
  margin: .6rem 0rem;
  line-height: 2rem;
  background-color: ${COLOR};
  float: right;
`;

class Header extends React.Component {
  getUserEmail() {
    // TODO: <use login API> to get user email
    return 'admin@moonda.com';
  }

  onLogout() {
    // TODO: <use login API> to send logout request
    if (window.confirm('로그아웃 하시겠습니까?')) {
      window.location.href = window.location.origin + BASENAME + '/login';
    }
  }

  render() {
    return (
      <Layout>
        {/* Left Items */}
        <LeftItem>Moonda admin page</LeftItem>

        {/* Right Items (reversed order) */}
        <RightItem onClick={this.onLogout}>로그아웃</RightItem>
        <RightItemDivider/>
        <RightItem>{this.getUserEmail()}</RightItem>

      </Layout>
    );
  }
}

export {
  Header as default,
  BACKGROUND_COLOR as HEADER_BACKGROUND_COLOR,
  COLOR as HEADER_COLOR,
  HEIGHT as HEADER_HEIGHT
};
