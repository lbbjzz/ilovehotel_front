import axios from 'axios'
import store from "@/store";

// axios.defaults.baseURL = "http://8.135.35.123:9000"
// 打包时更换为/api，设置nginx反向代理，以解决跨域或SameSite同源策略问题
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

export function request(config) {
  const instance = axios.create({
    timeout: 5000,
    headers: {
      'token': store().state.token
    }
  })
  return instance(config)
}
