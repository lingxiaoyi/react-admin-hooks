import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import asyncComponent from '@/components/AsyncComponent';
import MainContainer from '@/components/MainContainer';
import { AuthProvider } from '@/hooks/useAuth';

export const history = createHashHistory()

export const routes = [
  {
    path: '/income',
    component: () => import(/* webpackChunkName: "income" */ '@/pages/income/Index'),
  },
  {
    path: '/data',
    component: () => import(/* webpackChunkName: "data" */ '@/pages/data/Index'),
  },
  {
    path: '/account/dev',
    component: () => import(/* webpackChunkName: "account-dev" */ '@/pages/account/dev/Index'),
  },
  {
    path: '/account/operate',
    component: () => import(/* webpackChunkName: "account-operate" */ '@/pages/account/operate/Index'),
  },
  {
    path: '/account/auth',
    component: () => import(/* webpackChunkName: "account-auth" */ '@/pages/account/auth/Index'),
  },
  {
    path: '/account/auth/:id',
    component: () => import(/* webpackChunkName: "account-auth-info" */ '@/pages/account/info/Index'),
  },
  {
    path: '/bill',
    component: () => import(/* webpackChunkName: "bill" */ '@/pages/bill/Index'),
  },
  {
    path: '/help',
    component: () => import(/* webpackChunkName: "help" */ '@/pages/help/Index'),
  },
  {
    path: '/flow/app',
    component: () => import(/* webpackChunkName: "flow-app" */ '@/pages/flow/app/Index'),
  },
  {
    path: '/flow/ad',
    component: () => import(/* webpackChunkName: "flow-ad" */ '@/pages/flow/ad/Index'),
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "app-list" */ '@/pages/app/list/Index'),
  },
  {
    path: '/app/:id',
    component: () => import(/* webpackChunkName: "app-detail" */ '@/pages/app/detail/Index'),
  },
  {
    path: '/ad/base',
    component: () => import(/* webpackChunkName: "ad-base" */ '@/pages/ad/base/Index'),
  },
  {
    path: '/ad/base/:id',
    component: () => import(/* webpackChunkName: "ad-base-detail" */ '@/pages/ad/base-detail/Index'),
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login/Index'),
    notRequireAuth: true,
  },
];

export default () => {
  return (
    <Router history={history}>
      <AuthProvider>
        <MainContainer>
          <Switch>
            {
              routes.map(item => 
                <Route
                  exact
                  path={item.path}
                  key={item.path}
                  component={asyncComponent(item.component, item.notRequireAuth)} />
              )
            }
            <Redirect from="/" to="/income" />
          </Switch>
        </MainContainer>
      </AuthProvider>
    </Router>
  )
}