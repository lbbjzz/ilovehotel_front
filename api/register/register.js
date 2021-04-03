import {request} from "@/api/request";

//注册
export function register(username, password, email) {
  return request({
    url: '/hotelsystem/user/add',
    method: 'post',
    params: {
      "username": username,
      "password": password,
      "email": email,
    }
  })
}

//获取邮箱验证码
export function getEmailCode(email, imageCode, only) {
  return request({
    url: '/hotelsystem/email/sendEmail',
    method: 'post',
    params: {
      email,
      imageCode,
      only
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
