import {request} from "@/api/request";

export function getRoom(cityId) {
  return request({
    url: 'hotelsystem/tHomePicture/roomCard',
    method: 'post',
    params: {
      cityId
    }
  })
}

export function getCity(cityName) {
  return request({
    url: '/hotelsystem/city/list',
    method: 'post',
    params: {
      cityName
    }
  })
}
