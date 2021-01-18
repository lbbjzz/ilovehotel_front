import {request} from "@/api/request";

//获取验证码
export function getCodeApi() {
  return request({
    url: '/getcode',
    method: 'get',
    responseType: 'blob'
  })
}
