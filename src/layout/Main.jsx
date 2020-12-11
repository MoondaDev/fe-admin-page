import styled from "styled-components";
import React from "react";
import { HEADER_HEIGHT } from "./Header";
import { SIDEBAR_WIDTH } from "./Sidebar";

const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
  padding-left: ${SIDEBAR_WIDTH};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: white;
`;

const RowComponentGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`;

const LeftComponentGroup = styled.div`
  margin-right: auto;
`;

const RightComponentGroup = styled.div`
  margin-left: auto;
`;

class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          {this.props.children}
        </Container>
      </Wrapper>
    );
  }
}

export {
  Main as default,

  Main,
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup,
};
