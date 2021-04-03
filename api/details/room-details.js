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

export function getRoom(checkinTime, checkoutTime, cityId, roomTypeId) {
  return request({
    url: '/hotelsystem/room/search',
    method: 'post',
    params: {
      checkinTime,
      checkoutTime,
      cityId,
      roomTypeId
    }
  })
}

export function getOrder(checkinTime, checkoutTime, roomId) {
  return request({
    url: '/hotelsystem/order/create',
    method: 'post',
    params: {
      checkinTime,
      checkoutTime,
      roomId
    }
  })
}


