import {request} from '@/api/request'

export function getCarousel() {
  return request({
    url: '/hotelsystem/tHomePicture/list',
    method: 'post',
  })
}


export function getCityList() {
  return request({
    url: '/hotelsystem/city/list',
    method: 'post'
  })
}
