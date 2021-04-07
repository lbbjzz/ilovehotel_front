import {request} from "~/api/request";

export function toPay(id) {
  return request({
    url: '/hotelsystem/order/pay',
    method: 'post',
    params: {
      id
    }
  })
}

export function toCancel(id) {
  return request({
    url: '/hotelsystem/order/kill',
    method: 'post',
    params: {
      id
    }
  })
}
