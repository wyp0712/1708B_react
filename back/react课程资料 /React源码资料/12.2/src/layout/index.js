import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './index.css'
import logo from "../../public/logo.png"
import Link from 'umi/link'
import menuList from "../../mock/menu"
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default class index extends Component {
    state = {
        siderMenu: [],
        collapsed: false
    }
    //给二级菜单初始化菜单数据
    componentDidMount() {
        this.setState({
            siderMenu: menuList[0]
        })
    }
    //点击一级菜单切换二级菜单数据的方法
    levelOne = (ind) => {
        this.setState({
            siderMenu: menuList[ind]
        })
    }
    //控制二级菜单伸缩状态方法
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {

        console.log(this.props.location.pathname.split("/"))
        const routename = "/" + this.props.location.pathname.split("/")[1]
        const selectedKeys = [routename]
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <img src={logo} className={styles.logo} />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            // defaultSelectedKeys={['2']}
                            selectedKeys={selectedKeys}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="/home">
                                <Link onClick={() => this.levelOne(0)} to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="/about">
                                <Link onClick={() => this.levelOne(1)} to="/about">关于</Link>
                            </Menu.Item>
                            <Menu.Item key="/goods">
                                <Link onClick={() => this.levelOne(2)} to="/goods">商品</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Layout className={styles.content}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                {/* 循环渲染二级菜单数据 */}
                                {this.state.siderMenu.map(val => (
                                    <SubMenu
                                        key={val.keyValue}
                                        title={
                                            <div>
                                                <Icon type={val.iconType} />
                                                <span>{val.title}</span>
                                            </div>

                                        }
                                    >
                                        {val.children ? val.children.map(vals => (
                                            <Menu.Item key={vals.keyValue}>
                                                <Link to={vals.routeurl}>{vals.title}</Link>
                                            </Menu.Item>
                                        )) : null}
                                    </SubMenu>
                                ))}
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb> */}
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>

            </div>
        )
    }
}





