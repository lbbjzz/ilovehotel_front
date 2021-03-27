import {request} from "@/api/request";

export function getClass() {
  return request({
    url: '/hotelsystem/tHomePicture/floorCard',
    method: 'post'
  })
}
