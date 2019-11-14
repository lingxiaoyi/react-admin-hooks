import axios from 'axios';
import { globalStore } from '@/hooks/useAuth';

let apiBaseurl = 'http://localhost:9090/';

var instance = axios.create({
  baseURL: apiBaseurl,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(config => {
  let user = globalStore.user || {};
  config.headers['Authorization'] = user.token || null;
  return config;
}, error => {
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(res => {
  // 未登录权限控制
  if(res.data.code === '195') {
    const { history } = globalStore;
  }
  return Promise.resolve(res.data);
}, error => {
  return Promise.reject(error);
});

export default instance;
