import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.125.117:8001",
    timeout: 5000,
  });

  // 2.axios的拦截器
  // 2.1请求拦截器的作用
  instance.interceptors.request.use(config => {
    
    return config
  },error => {
    //console.log(error)
  });
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  });
  // 3发送真正的网络请求
  return instance(config)
}
