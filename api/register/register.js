import {request} from "@/api/request";

//注册
export function register(email, username, password) {
  return request({
    url: '/hotelsystem/user/add',
    method: 'post',
    params: {
      "email": email,
      "username": username,
      "password": password,
    }
  })
}

//获取邮箱验证码
export function getEmailCode(email, imageCode) {
  return request({
    url: '/hotelsystem/email/sendEmail',
    method: 'post',
    params: {
      email,
      imageCode,
    }
  })
}

//验证邮箱验证码
export function emailCodeVerify(code, email) {
  return request({
    url: '/hotelsystem/email/checkCode',
    method: 'post',
    params: {
      code,
      email,
    }
  })
}
