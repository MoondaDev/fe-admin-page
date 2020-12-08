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


export {
  Main as default,

  Main,
};
