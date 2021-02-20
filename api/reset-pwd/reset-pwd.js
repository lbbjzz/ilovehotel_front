import {request} from "@/api/request";

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
