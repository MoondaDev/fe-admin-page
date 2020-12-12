import React from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from "../../../layout/Header";
import Sidebar from "../../../layout/Sidebar";
import Main, {
  Modal,
  ModalTitle,
  RowComponentGroup,
  LeftComponentGroup,
  RightComponentGroup
} from "../../../layout/Main";

import Title from "../../../components/Title";
import SearchBar from "../../../components/SearchBar";
import BoxForm, { BoxFormRow } from "../../../components/BoxForm";
import { LargeTable } from "../../../components/Table";
import { GrayButton, BlueButton, GreenButton, RedButton } from "../../../components/Button";

const PATHNAME = '/admin/lecture/new';
const MODAL_PATHNAME = PATHNAME+'/manual';

class Page extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Sidebar/>
        <Switch>
          <Route path={MODAL_PATHNAME}>
            <Modal>
              <ModalTitle>
                <span>강좌 수동 입력</span>
                <Link to={PATHNAME}>
                  <button>
                    <i class="fas fa-times"></i>
                  </button>
                </Link>
              </ModalTitle>

              <LargeTable>
                <tbody>
                  <tr>
                    <td>강좌명</td>
                    <td colSpan={6}>
                      <input type="text"/>
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={9}>대상</td>
                    <td>
                      <input type="checkbox" />
                      <label>성인</label>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <label>여성전용</label>
                    </td>
                    <td rowSpan={9}>카테고리</td>
                    <td>
                      <input type="checkbox" />
                      <label>요리</label>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <label>공예</label>
                    </td>
                    <td>
                      <input type="checkbox" />
                      <label>미술</label>
                    </td>
                  </tr>
                </tbody>
              </LargeTable>
             </Modal>
          </Route>

          <Route path="*">
            <Main>
              <RowComponentGroup>
                <Title>강좌 정보 추가</Title>
              </RowComponentGroup>

              <RowComponentGroup>
                <LeftComponentGroup>
                  <RedButton>삭제하기</RedButton>
                </LeftComponentGroup>
                <RightComponentGroup>
                  <GrayButton>파일 내보내기</GrayButton>
                  <BlueButton>저장</BlueButton>
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
                <LeftComponentGroup>
                  <SearchBar>강좌 검색</SearchBar>
                </LeftComponentGroup>
                <RightComponentGroup>
                  <Link to={MODAL_PATHNAME}>
                    <GreenButton>강좌 추가</GreenButton>
                  </Link>
                </RightComponentGroup>
              </RowComponentGroup>

              <RowComponentGroup>
                <LargeTable>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>추천</th>
                      <th>번호</th>
                      <th>강좌명</th>
                      <th>대상</th>
                      <th>카테고리</th>
                      <th>장소</th>
                      <th>강좌 시간</th>
                      <th>수강 기간</th>
                      <th>등록 기간</th>
                      <th>수강료</th>
                      <th>정원</th>
                      <th>안내사항1</th>
                      <th>안내사항2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td><input type="checkbox" /></td>
                      <td>1234</td>
                      <td>웹개발</td>
                      <td>나</td>
                      <td>프로그래밍</td>
                      <td>집</td>
                      <td>항상</td>
                      <td>12/11까지</td>
                      <td>N/A</td>
                      <td>0 won</td>
                      <td>2</td>
                      <td>생각보다</td>
                      <td>어렵네요 Oops</td>
                    </tr>
                  </tbody>
                </LargeTable>
              </RowComponentGroup>
            </Main>
          </Route>
        </Switch>
      </>
    );
  }
}

export {
  Page as default,
  Page,
  PATHNAME,
};
