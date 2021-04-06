import {request} from "@/api/request";

export function getIntroDetails(floorId) {
  return request({
    url: '/hotelsystem/floor/view',
    method: 'post',
    params: {
      floorId
    }
  })
}
