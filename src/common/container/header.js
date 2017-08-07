import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
// import screenfull from 'screenfull'
import './header.less'

const SubMenu = Menu.SubMenu
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'xxx电力系统'
        })
    }

    clear = (item) => {
        if (item.key === 'logOut') {
            this.props.clear()
        }
    }

    render() {
        return (
            <Header style={{ background: '#a3c262'}}>
                {/*<Icon*/}
                    {/*className="trigger"*/}
                    {/*type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}*/}
                    {/*onClick={this.props.toggle}*/}
                {/*/>*/}
                <img src={require('images/360_logo.png')} style={{width:'120px',height:'26.6px'}} alt=""/>
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu key={<span><Icon type="user" />{ this.state.username }</span>} title={<span><Icon type="user" />{ this.state.username }</span>} >
                        <Menu.Item key="logOut"><Link key={'login'} to="/login" >退出</Link></Menu.Item>
                    </SubMenu>
                </Menu>
                {/*<Icon
                    className="screenFull"
                    type="arrows-alt"
                    onClick={this.screenFull}
                />*/}
            </Header>
        );
    }
}