import React from "react";
import classNames from "../../scripts/util/classNames";

class Sidebar extends React.Component {
  getSidebarItems() {
    // TODO: 아이콘 삽입하기
    return [
      {
        title: '문화센터 정보',
        icon: 'ic1',
        url: '/admin/center'
      },
      {
        title: '강좌 정보',
        icon: 'ic2',
        url: '/admin/course'
      },
      {
        title: '강좌 이미지',
        icon: 'ic3',
        url: '/admin/gallery'
      }
    ];
  }

  render() {
    return (
      <aside className="layout">
        <nav>
          <ul className="nav-list">
            {this.getSidebarItems().map(item =>
              <Item
                title={item.title}
                icon={item.icon}
                url={item.url}
              />
            )}
          </ul>
        </nav>
      </aside>
    );
  }
}

class Item extends React.Component {
  render() {
    const { icon, title, url } = this.props;

    return (
      <li className={classNames({
        'nav-item': true,
        'active': window.location.pathname.startsWith(url)
      })}>
        <a className="muted" href={url}>
          <i className="icon">{icon}</i>
          <span className="title">{title}</span>
        </a>
      </li>
    );
  }
}

export default Sidebar;
