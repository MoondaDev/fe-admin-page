import React from "react";

import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";
import Main, {
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../layout/Main";

import Title from "../../components/Title";
import { BlueButton } from "../../components/Button";
import BoxForm, { BoxFormRow } from "../../components/BoxForm";
import { NormalTable } from "../../components/Table";

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

          <RowComponentGroup>
            <RightComponentGroup>
              <BlueButton>저장</BlueButton>
            </RightComponentGroup>
          </RowComponentGroup>

          <RowComponentGroup>
            <BoxForm>
              <BoxFormRow>
                <label>강좌 카테고리</label>
                <input type="text" />
              </BoxFormRow>
              <BoxFormRow>
                <label>강좌 이미지</label>
                <input type="file" multiple="multiple" />
              </BoxFormRow>
            </BoxForm>
          </RowComponentGroup>

          <RowComponentGroup>
            <NormalTable>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>강좌 카테고리</th>
                  <th colSpan={4}>강좌 이미지</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={4}><input type="checkbox" /></td>
                  <td rowSpan={4}>요리</td>
                  <td>서양요리.jpg</td>
                  <td>2020/11/16 23:06</td>
                  <td>5.7MB</td>
                  <td>이미지(JPG)</td>
                </tr>
                <tr>
                  <td>서양요리.jpg</td>
                  <td>2020/11/16 23:06</td>
                  <td>5.7MB</td>
                  <td>이미지(JPG)</td>
                </tr>
                <tr>
                  <td>서양요리.jpg</td>
                  <td>2020/11/16 23:06</td>
                  <td>5.7MB</td>
                  <td>이미지(JPG)</td>
                </tr>
                <tr>
                  <td>서양요리.jpg</td>
                  <td>2020/11/16 23:06</td>
                  <td>5.7MB</td>
                  <td>이미지(JPG)</td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>공예</td>
                  <td>공예하는 공유.jpg</td>
                  <td>2020/11/16 23:06</td>
                  <td>5.7MB</td>
                  <td>이미지(JPG)</td>
                </tr>
              </tbody>
            </NormalTable>
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
