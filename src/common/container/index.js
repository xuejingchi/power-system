import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from 'utils/menu'
import Top from './header'
import Contents from './content'
import './index.less'
// 测试mock数据
// import { getData, postData } from '../../fetch/data.js'
// getData();
// postData();
const SubMenu = Menu.SubMenu;
const { Sider } = Layout

// 首页结构
export default class Container extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
    openKeys: [],  // 当前展开列表的数量
  }
  componentDidMount() {
    this.handleClick([], 'index')
  }
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  }
  getAncestorKeys = (key) => {
    const map = {
      sub3:['sub2'],
    };
    return map[key] || [];
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }
  render() {
    return (
      <Layout className="containAll">
        <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
        <Layout>
          <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              className="leftMenu"
          >
              { this.state.theme === 'light' ? <Icon type="github" className="github" /> :
                  <Icon type="github" className="github white" /> }
              { this.state.theme === 'light' ? <span className="author">薛镜池</span> : <span className="author white">薛镜池</span> }
            <Menu
                onOpenChange={this.onOpenChange}
                openKeys={this.state.openKeys}
                theme={this.state.theme}
                onClick={this.handleClick}
                defaultOpenKeys={['']}
                selectedKeys={[this.state.current]}
                className="menu"
                mode={this.state.mode}
            >
                {
                    allMenu.map((subMenu) => {
                        if (subMenu.children && subMenu.children.length) {
                            return (
                                <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                                    {subMenu.children.map(menu => (
                                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                                    ))}
                                </SubMenu>
                            )
                        }
                        return (
                            <Menu.Item key={subMenu.url}>
                              <Link to={`/${subMenu.url}`}>
                                <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                              </Link>
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
            <div className="switch">
              <Switch
                  checked={this.state.theme === 'dark'}
                  onChange={this.changeTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
              />
            </div>
          </Sider>
          <Contents />
        </Layout>
      </Layout>
    );
  }
}