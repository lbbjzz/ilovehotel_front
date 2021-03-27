import {request} from "@/api/request";

//获取验证码
export function getEmailCode(email, imageCode ,type) {
  return request({
    url: '/hotelsystem/email/sendPassworEmail',
    method: 'post',
    params: {
      email,
      imageCode,
      type
    }
  })
}

//验证邮箱验证码
export function emailCodeVerify(code, email) {
  return request({
    url: '/hotelsystem/email/checkPasswordCode',
    method: 'post',
    params: {
      code,
      email,
    }
  })
}



//修改密码
export function resetPwd(email, password) {
  return request({
    url: '/hotelsystem/user/changePassword',
    method: 'post',
    params: {
      email,
      password
    }
  })
}
