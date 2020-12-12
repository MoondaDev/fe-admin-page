import React from "react";

import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import Main, {
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../../layout/Main";

import Title from "../../../components/Title";
import BoxForm, { BoxFormRow } from "../../../components/BoxForm";
import { GreenButton } from "../../../components/Button";

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
          
          <RowComponentGroup></RowComponentGroup>

          <RowComponentGroup>
            <RightComponentGroup>
              <GreenButton>추가</GreenButton>
            </RightComponentGroup>
          </RowComponentGroup>

          <RowComponentGroup>
            <BoxForm>
              <BoxFormRow>
                <label>문화센터</label>
                <input type="text" />
              </BoxFormRow>

              <BoxFormRow>
                <label>주소</label>
                <input type="text" />
              </BoxFormRow>

              <BoxFormRow>
                <label>전화번호</label>
                <input type="text" />
              </BoxFormRow>

              <BoxFormRow>
                <label>홈페이지</label>
                <input type="text" />
              </BoxFormRow>

              <BoxFormRow>
                <label>수강신청 페이지</label>
                <input type="text" />
              </BoxFormRow>

              <BoxFormRow>
                <label>활성</label>
                <input type="checkbox" />
              </BoxFormRow>

              <BoxFormRow>
                <label>이미지</label>
                <input type="file" multiple="multiple" />
              </BoxFormRow>

              <BoxFormRow>
                <label>담당자</label>
                <input type="text" />
              </BoxFormRow>

            </BoxForm>
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
