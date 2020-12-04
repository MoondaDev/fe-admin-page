import React from "react";
import classNames from "../scripts/util/classNames";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="layout">
        <nav>
          <ul className="nav-list">
            <Item title="문화센터 정보"
              icon="fas fa-university"
              url="/admin/center"
            />
            <Item title="강좌 정보"
              icon="fas fa-inbox"
              url="/admin/course"
            />
            <Item title="강좌 이미지"
              icon="fas fa-photo-video"
              url="/admin/gallery"
            />
          </ul>
        </nav>
      </aside>
    );
  }
}

class Item extends React.Component {
  render() {
    // icon로는 font-awesome 에서 사용하는 클래스 문자열을 전달
    const { icon, title, url } = this.props;

    return (
      <li className={classNames({
        'nav-item': true,
        'active': window.location.pathname.startsWith(url)
      })}>
        <a className="muted" href={url}>
          <i className={classNames(icon, 'icon')}></i>
          <span className="title">{title}</span>
        </a>
      </li>
    );
  }
}

export default Sidebar;