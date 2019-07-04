import axios from 'axios'
import store from '../store'
import { getToken } from './user/token'
import { getBaseURL } from './user/baseURL'

// axios.defaults.headers.post["Content-type"]="application/json"
// 创建axios实例
let baseURL=getBaseURL();

 // baseURL='';//不用mock时注释掉

 axios.defaults.withCredentials=true;
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 8000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      console.log('token进来了')
      config.headers.Authorization = 'Bearer '+getToken('just');
      // config.headers['X-Token'] = 'Bearer '+ getToken('just')// 让每个请求携带自定义token 请根据实际情况自行修改
    }else{
      // 跳转到登录页面
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
       return response.data
  },
  error => {
     console.log(error)
  }
)

export default service
