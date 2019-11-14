import React, { Fragment, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon, Dropdown, Spin, ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import MainLayout from '@/components/MainLayout';
import '@/styles/layout.scss';
import { useAuthStore, globalStore } from '@/hooks/useAuth';

moment.locale('zh-cn');
const { Header } = Layout;

export default withRouter(({ children, location, history }) => {
  globalStore.history = history;

  // 单独视图
  if(['/login'].indexOf(location.pathname) > -1) {
    return children;
  }

  // 客户端判断未登录跳转到登录
  if(!globalStore.user || !globalStore.user.id) {
    return <Redirect to='/login' />
  }

  const [state, dispatch] = useAuthStore();
  // dispatch({type: 'getAuth'});

  // // 如果没有home的权限则重定向到第一个权限菜单
  // if(location.pathname === '/' && !authLoading && authRoutes.length) {
  //   return <Redirect to={authRoutes[0]} />
  // }
  
  // // 如果没有权限访问则跳到无权限页面
  // if(authRoutes.indexOf(location.pathname) === -1 && !authLoading && allRoutes.indexOf(location.pathname) > -1) {
  //   return (
  //     <div className="page-error page-noauth">
  //       <h2>抱歉，您没有权限访问~</h2>
  //       <h3>Sorry, you don't have permission to visit.</h3>
  //     </div>
  //   )
  // }
  
  let childrenLayout = children;
  childrenLayout = <MainLayout>{children}</MainLayout>
  
  return (
    <ConfigProvider locale={zhCN}>
      {
        state.authLoading ? <div className="main-loading"><Spin tip="Loading..."/></div> : 
        <Layout className="main-wrapper">
          <Header className="main-header clearfix">
            <div className="main-header-logo">中辉广告SSP | 运营管理后台</div>
            <div className="main-header-right">
              <Dropdown 
                overlay={
                  <Menu>
                    <Menu.Item onClick={() => dispatch({type: 'logout'})}>退出登录</Menu.Item>
                  </Menu>
                }>
                <span className="ant-dropdown-link">
                  {state.user.username || '管理员'} <Icon type="caret-down" />
                </span>
              </Dropdown>
            </div>
          </Header>
          {childrenLayout}
        </Layout>
      }
    </ConfigProvider>
  )
})