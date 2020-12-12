import React from "react";

import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import Main, {
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../../layout/Main";

import Title from "../../../components/Title";

const PATHNAME = '/admin/center/new';
class Page extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Main>
          <RowComponentGroup>
            <Title>문화센터 정보 추가</Title>
          </RowComponentGroup>
        </Main>
      </>
    );
  }
}

export {
  Page as default,
  Page,
  PATHNAME,
};
