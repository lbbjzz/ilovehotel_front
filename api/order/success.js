import {request} from "../request";

export function checkinIsFalse(orderId) {
  return request({
    url: '/hotelsystem/checkin/isflase',
    method: 'post',
    params: {
      orderId
    }
  })
}
