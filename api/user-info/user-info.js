import {request} from "@/api/request";

export function updateInfo(params) {
  return request({
    url: '/hotelsystem/user/update',
    method: 'post',
    params: {
      ...params
    }
  })
}


export function updateAvatar(avatar, id) {
  return request({
    url: '/hotelsystem/user/update',
    method: 'post',
    params: {
      avatar,
      id
    }
  })
}

export function userDetail(id) {
  return request({
    url: '/hotelsystem/user/view',
    method: 'post',
    params: {
      id
    }
  })
}

export function getNewEmailCode(email) {
  return request({
    url: '/hotelsystem/email/sendNewEmail',
    method: 'post',
    params: {
      email
    }
  })
}

export function checkNewEmailCode(email, code) {
  return request({
    url: '/hotelsystem/email/checkNewEmail',
    method: 'post',
    params: {
      email,
      code
    }
  })
}



