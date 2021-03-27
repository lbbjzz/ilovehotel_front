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




