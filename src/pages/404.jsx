import React from "react";
import Title from "../components/Title";
import Main from "../layout/Main";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

class Empty extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Sidebar></Sidebar>
        <Main>
          <Title>404 Page not found</Title>
        </Main>
      </>
    );
  }
}

export default Empty;
