import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import Main, {
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../../layout/Main";
import { PATHNAME as centerNewPathname } from "./new";

import Title from "../../../components/Title";
import SearchBar from "../../../components/SearchBar";
import Table from "../../../components/Table";
import BoxForm, { BoxFormRow } from "../../../components/BoxForm";
import { GrayButton, GreenButton } from "../../../components/Button";

const PATHNAME = '/admin/center/list';

class Page extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Main>
          <RowComponentGroup>
            <Title>문화센터 정보</Title>
          </RowComponentGroup>

          <RowComponentGroup></RowComponentGroup>

          <RowComponentGroup>
            <LeftComponentGroup>
              <SearchBar>문화센터 검색</SearchBar>
            </LeftComponentGroup>
            <RightComponentGroup>
              <Link to={centerNewPathname}>
                <GreenButton>추가</GreenButton>
              </Link>
            </RightComponentGroup>
          </RowComponentGroup>

          <RowComponentGroup>
            <Table>
              <thead>
                <tr>
                  <th>문화센터</th>
                  <th>주소</th>
                  <th>전화번호</th>
                  <th>홈페이지</th>
                  <th>수강신청 페이지</th>
                  <th>활성</th>
                  <th>이미지</th>
                  <th>담당자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>롯데몰 수지점</td>
                    <td>경기 용인시 수지구 성북2로 38-0 2층 문화센터</td>
                    <td>031-5174-2590</td>
                    <td>http://culture.lottemart.com/cu/catalog.do?</td>
                    <td>https://culture.lottemart.com/cu/gus/course/courseinfo/courselist.do?</td>
                    <td><input type="checkbox" /></td>
                    <td>이미지 3개</td>
                    <td>신지현</td>
                  </tr>
                <tr>
                  <td>롯데몰 수지점</td>
                  <td>경기 용인시 수지구 성북2로 38-0 2층 문화센터</td>
                  <td>031-5174-2590</td>
                  <td>http://culture.lottemart.com/cu/catalog.do?</td>
                  <td>https://culture.lottemart.com/cu/gus/course/courseinfo/courselist.do?</td>
                  <td><input type="checkbox" /></td>
                  <td>이미지 3개</td>
                  <td>신지현</td>
                </tr>
              </tbody>
            </Table>
          </RowComponentGroup>

          <RowComponentGroup>
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
