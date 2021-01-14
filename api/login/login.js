import {request} from "@/api/request";

//登录
export function login(username, password, code) {
  return request({
    url: '/login',
    method: "post",
    params: {
      "username": username,
      "password": password,
      "code": code
    }
  })
}
