import {request} from "@/api/request";

export function getCityDetail(cityId) {
  return request({
    url: '/hotelsystem/city/view',
    method: 'post',
    params: {
      cityId
    }
  })
}
