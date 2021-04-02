import {request} from "../request";

export function getRoomTypeDetails(roomTypeId) {
  return request({
    url: '/hotelsystem/RoomType/view',
    method: 'post',
    params: {
      roomTypeId
    }
  })
}


