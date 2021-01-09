import {request} from "@/api/request";

//获取验证码
export function getCodeApi() {
  return request({
    url: 'http://8.135.35.123:9000/getcode',
    method: 'get',
    responseType: 'blob'
  })
}
