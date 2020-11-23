import React from "react";

class Sidebar extends React.Component {
  getSidebarItems() {
    // TODO: 아이콘 삽입하기
    return [
      {
        title: '문화센터 정보',
        icon: 'ic1',
        url: '/admin/center',
        isActive: true
      },
      {
        title: '강좌 정보',
        icon: 'ic2',
        url: '/admin/course',
        isActive: false
      },
      {
        title: '강좌 이미지',
        icon: 'ic3',
        url: '/admin/gallery',
        isActive: false
      }
    ];
  }

  render() {
    return (
      <aside className="sidebar">
        <nav>
          <ul className="nav-list">
            {this.getSidebarItems().map(item =>
              <Item
                title={item.title}
                icon={item.icon}
                url={item.url}
                isActive={item.isActive}
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
    const { icon, title, url, isActive } = this.props;
    return (
      <li className={`nav-item ${isActive ? 'active' : ''}`}>
        <a className="muted" href={url}>
          <i className="icon">{icon}</i>
          <span className="title">{title}</span>
        </a>
      </li>
    );
  }
}

export default Sidebar;
