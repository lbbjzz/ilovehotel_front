import {request} from "@/api/request";

export function getRoom() {
  return request({
    url: 'hotelsystem/tHomePicture/roomCard',
    method: 'post'
  })
}
