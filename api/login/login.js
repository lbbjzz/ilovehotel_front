import {request} from "@/api/request";

//登录
export function login(username, password, code, only) {
  return request({
    url: '/login',
    method: "post",
    params: {
      username,
      password,
      code,
      only
    }
  })
}
