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


export function getOrderDetail(id) {
  return request({
    url: '/hotelsystem/order/view',
    method: 'post',
    params: {
      id
    }
  })
}
