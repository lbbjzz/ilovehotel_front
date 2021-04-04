import {request} from "../request";

export function checkin(name, idcard, orderId) {
  return request({
    url: '/hotelsystem/checkin/autoCheckin',
    method: 'post',
    params: {
      name,
      idcard,
      orderId
    }
  })
}
