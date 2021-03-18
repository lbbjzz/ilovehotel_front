import {request} from '@/api/request'

export function getCarousel() {
  return request({
    url: '/hotelsystem/tHomePicture/list',
    method: 'post',
  })
}
