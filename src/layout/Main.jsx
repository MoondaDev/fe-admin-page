import React from "react";
import styled from "styled-components";

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

const ModalShadow = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(0,0,0,.75);
`;

const ModalOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 3.6rem;
  border: 1px solid #efefef;
`;

const ModalTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.6rem;
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-color: rgb(51, 63, 80);
  color: white;

  & * {
    color: inherit;
    background-color: transparent;
  }
  & button {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    padding: .2rem;
    border: none;
    font-size: 1.2rem;
    line-height: 1.2rem;
    cursor: pointer;
  }
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

class Modal extends React.Component {
  render() {
    return (
      <Wrapper>
        <ModalShadow>
          <ModalOverlay>
            <Container>
              {this.props.children}
            </Container>
          </ModalOverlay>
        </ModalShadow>
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

  Modal,
  ModalTitle,
};
