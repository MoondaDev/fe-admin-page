import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "./Header";

const BACKGROUND_COLOR = css`rgb(51, 63, 80)`;
const COLOR = css`rgb(255, 255, 255)`;
const WIDTH = css`13.6rem`;

const ITEMS = [
  // for icons, use Font-Awesome icons
  // https://fontawesome.com/icons/
  {
    title: '문화센터 정보',
    icon: 'fas fa-university',
    path: '/admin/center',
    children: [
      {
        subtitle: '리스트',
        subpath: '/list'
      },
      {
        subtitle: '추가',
        subpath: '/new'
      }
    ],
  },
  {
    title: '강좌 정보',
    icon: 'fas fa-inbox',
    path: '/admin/lecture',
    children: [
      {
        subtitle: '리스트',
        subpath: '/list'
      },
      {
        subtitle: '추가',
        subpath: '/new'
      }
    ],
  },
  {
    title: '카테고리별 이미지',
    icon: 'fas fa-photo-video',
    path: '/admin/images'
  },
];

const Layout = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: ${WIDTH};
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
  background-color: ${BACKGROUND_COLOR};
  color: ${COLOR};
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled(NavLink)`
  display: inline-block;
  margin-top: .4rem;
  margin-left: .4rem;
  padding: .4rem;
  color: ${COLOR};
  opacity: .5;

  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  transition: opacity .1s ease;
  -webkit-transition: opacity .1s ease;
  
  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: .8;
  }
`;

const ItemIcon = styled.i`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;
`;

const ItemTitle = styled.span`
  display: inline-block;
  width: auto;
  height: 1.6rem;
  margin-left: .8rem;
  font-size: 1.12rem;
  line-height: 1.6rem;
`;

const ItemSubtitle = styled.span`
  display: inline-block;
  width: auto;
  height: 1.6rem;
  margin-left: 2.8rem;
  font-size: 1.12rem;
  line-height: 1.6rem;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <Layout>
        <nav>
          <NavList>
            {/* Major Item */}
            {ITEMS.map(({ title, icon, path, children }) => <li key={path}>
              <Item to={path}>
                <ItemIcon className={icon} />
                <ItemTitle>{title}</ItemTitle>
              </Item>
              {!!children ? <NavList>
                {/* Minor Items */}
                {children.map(({ subtitle, subpath }) => <li key={path+subpath}>
                  <Item to={path+subpath}>
                    <ItemSubtitle>{'- '+subtitle}</ItemSubtitle>
                  </Item>
                </li>)}
              </NavList> : null}
            </li>)}
          </NavList>
        </nav>
      </Layout>
    );
  }
}

export {
  Sidebar as default,
  BACKGROUND_COLOR as SIDEBAR_BACKGROUND_COLOR,
  COLOR as SIDEBAR_COLOR,
  WIDTH as SIDEBAR_WIDTH
};
