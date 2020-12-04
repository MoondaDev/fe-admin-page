import React from "react";
import styled from "styled-components";
import { HEADER_HEIGHT } from "./Header";
import { SIDEBAR_WIDTH } from "./Sidebar";

const Layout = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
  padding-left: ${SIDEBAR_WIDTH};
`;

const Wrapper = styled.div`
  padding: 0rem 1rem;
`;

class Main extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>{this.props.children}</Wrapper>
      </Layout>
    );
  }
}

export default Main;
