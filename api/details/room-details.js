import {request} from "@/api/request";

export function getRoomDetails(id) {
  return request({
    url: '/hotelsystem/room/view',
    method: 'post',
    params: {
      id
    }
  })
}


