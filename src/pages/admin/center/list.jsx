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

          <RowComponentGroup>
            <RightComponentGroup>
              <Link to={centerNewPathname}>
                <GreenButton>추가</GreenButton>
              </Link>
            </RightComponentGroup>
          </RowComponentGroup>

          <RowComponentGroup>
            <BoxForm>
              <BoxFormRow>
                <label>문화센터</label>
                <input type="text" />
              </BoxFormRow>
              <BoxFormRow>
                <label>학기 분류</label>
                <select>
                  <option value="">2021 봄학기</option>
                  <option value="">2021 여름학기</option>
                  <option value="">2021 가을학기</option>
                  <option value="">2021 겨울학기</option>
                </select>
              </BoxFormRow>
              <BoxFormRow>
                <label>활성</label>
                <input type="checkbox" />
              </BoxFormRow>
              <BoxFormRow>
                <label>강좌 엑셀파일</label>
                <input type="file" />
              </BoxFormRow>
              <BoxFormRow>
                <label>담당자</label>
                <input type="text" />
              </BoxFormRow>
            </BoxForm>
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
