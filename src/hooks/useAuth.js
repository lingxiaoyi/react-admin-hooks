import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';
import api from '@/services/api';
import message from '@/utils/message';

const AuthStoreContext = createContext();

export const globalStore = new Proxy({
  user: JSON.parse(window.localStorage.getItem('SSP_ADMIN_USER')) || {},
  redirectUrl: '/',
  history: {},
  authMenus: [],
  authRoutes: [],
  authLoading: true
}, {})

export function AuthProvider({ children }) {
  const [state, setGlobalState] = useState(globalStore);

  // function getAuthData() {
  //   setGlobalState({ ...state, authLoading: false })
  // }

  useEffect(() => {
    if(state.authLoading) {
      api.getAuth().then(res => {
        console.log('-------------- get Auth ----------------')
        setGlobalState({ ...state, authLoading: false })
      })
    }
  }, [state, state.authLoading])

  function handleLogout() {
    const { history = {} } = state; 
    const { location = {} } = history;
    api.logout().then(res => {
      if(res.code === 200) {
        message.success('登出成功');
        setGlobalState({
          ...state,
          user: {},
          redirectUrl: location.pathname
        })
        globalStore.user = {};
        history.push('/login')
      }
    })
  }

  function handleLogin(formData) {
    const { history, redirectUrl } = state;
    return api.login().then(res => {
      if(res.code === 200 && res.data) {
        message.success('登录成功');
        let loginUser = res.data.user || {}
        window.localStorage.setItem('SSP_ADMIN_USER', JSON.stringify(loginUser))
        setGlobalState({
          ...state,
          user: loginUser,
          authLoading: true,
        })
        globalStore.user = loginUser;
        history.replace(redirectUrl === '/login' ? '/' : redirectUrl)
        return false
      }
      return true
    })
  }

  function dispatch(action) {
    switch (action.type) {
      // case 'getAuth':
      //   return getAuthData()
      
      case 'logout':
        return handleLogout()

      case 'login':
          return handleLogin(action.payload)
      
      default:
        throw new Error('Unexpected action');
    }
  }

  return (
    <AuthStoreContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStoreContext.Provider>
  );
}

export function useAuthStore() {
  const [state, dispatch] = useContext(AuthStoreContext);
  return [state, dispatch];
}