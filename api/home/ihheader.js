import {request} from '@/api/request'

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
