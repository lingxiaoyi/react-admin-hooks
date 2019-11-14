import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu }  = Menu;

export default withRouter(({ children, history, location }) => {
  const handleMenuChange = ({ key }) => history.push(key);
  
  return (
    <Layout className="main-layout">
      <div className="main-layout-left">
        <div className="left-menus">
          <Sider
            className="main-sider"
            width={160}>
            <Menu
              mode="inline"
              className="main-menu scrollbar"
              defaultSelectedKeys={[location.pathname]}
              defaultOpenKeys={['/'+location.pathname.split('/')[1]]}
              onClick={handleMenuChange}>
              <Menu.Item key="/income">
                <Icon type="safety-certificate" />
                <span>发布收益</span>
              </Menu.Item>
              <Menu.Item key="/data">
                <Icon type="bar-chart" />
                <span>数据报表</span>
              </Menu.Item>
              <SubMenu
                key="/account"
                title={
                  <span>
                    <Icon type="user" />
                    <span>用户管理</span>
                  </span>
                }>
                <Menu.Item key="/account/dev">开发者管理</Menu.Item>
                <Menu.Item key="/account/operate">运营管理</Menu.Item>
                <Menu.Item key="/account/auth">权限管理</Menu.Item>
              </SubMenu>
              <Menu.Item key="/bill">
                <Icon type="account-book" />
                <span>账单管理</span>
              </Menu.Item>
              <Menu.Item key="/help">
                <Icon type="file-unknown" />
                <span>帮助页管理</span>
              </Menu.Item>   
              <SubMenu
                key="/flow"
                title={
                  <span>
                    <Icon type="interaction" />
                    <span>流量管理</span>
                  </span>
                }>
                <Menu.Item key="/flow/app">应用管理</Menu.Item>
                <Menu.Item key="/flow/ad">广告位管理</Menu.Item>
              </SubMenu>
              <Menu.Item key="/app">
                <Icon type="appstore" />
                <span>应用审核</span>
              </Menu.Item>
              <SubMenu
                key="/ad"
                title={
                  <span>
                    <Icon type="profile" />
                    <span>广告管理</span>
                  </span>
                }>
                <Menu.Item key="/ad/base">外输打底管理</Menu.Item>
              </SubMenu>       
            </Menu>
          </Sider>
        </div>
      </div>
      <Layout className="main-content scrollbar scrollbar-lg">
        { children }
      </Layout>
    </Layout>
  )
})
