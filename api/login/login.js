import {request} from "@/api/request";

//登录
export function login(username, password, code) {
  return request({
    url: 'http://8.135.35.123:9000/login',
    method: "post",
    params: {
      "username": username,
      "password": password,
      "code": code
    }
  })
}
