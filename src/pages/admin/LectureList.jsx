import React from "react";

import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import Main from "../../layout/Main";

import Title from "../../components/Title";
import Table from "../../components/Table";

class Page extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Sidebar></Sidebar>
        <Main>
          <Title>강좌 정보</Title>
          <Table>
            <thead>
              <tr>
                <th>문화센터</th>
                <th>학기 분류</th>
                <th>활성</th>
                <th>담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>롯데몰 수지점</td>
                <td>2020 겨울학기</td>
                <td><input type="checkbox" /></td>
                <td>신지현</td>
              </tr>
              <tr>
                <td>신세계백화점 경기점</td>
                <td>2020 겨울학기</td>
                <td><input type="checkbox" /></td>
                <td>신지현</td>
              </tr>
            </tbody>
          </Table>
        </Main>
      </>
    );
  }
}

export default Page;
