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
