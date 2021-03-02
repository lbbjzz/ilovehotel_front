import axios from 'axios'
import store from "@/store";

axios.defaults.baseURL = "https://www.leejaycee.top:9000/"
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
