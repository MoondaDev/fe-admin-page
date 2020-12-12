import React from "react";

import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import Main, {
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../layout/Main";

import Title from "../../components/Title";

const PATHNAME = '/admin/images';
class Page extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Main>
          <RowComponentGroup>
            <Title>카테고리별 이미지</Title>
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
