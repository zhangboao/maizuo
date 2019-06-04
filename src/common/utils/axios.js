import Axios from 'axios'

// 请求拦截器
Axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应拦截器
Axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('响应拦截器  正确处理')
  console.log(response)
  return response.data;
}, function (error) {
  console.log('响应拦截器  错误处理')
  // Do something with response error
  return Promise.reject(error);
});

export default  Axios