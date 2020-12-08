import styled from "styled-components";
import { HEADER_HEIGHT } from "./Header";
import { SIDEBAR_WIDTH } from "./Sidebar";

const Main = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
  padding-left: ${SIDEBAR_WIDTH};
`;

const RowComponentGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding: 0rem 1rem;
`;

const LeftComponentGroup = styled.div`
  margin-right: auto;
`;

const RightComponentGroup = styled.div`
  margin-left: auto;
`;

export {
  Main as default,

  Main,
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup,
};
