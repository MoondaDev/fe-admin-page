import React from "react";

import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import Main from "../../layout/Main";

import Title from "../../components/Title";

class Page extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Sidebar></Sidebar>
        <Main>
          <Title>강좌 정보</Title>
        </Main>
      </>
    );
  }
}

export default Page;
