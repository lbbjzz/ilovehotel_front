import {request} from "../request";

export function getOrderOfCurrentUser(orderStatus) {
  return request({
    url: '/hotelsystem/order/userOrders',
    method: 'post',
    params: {
      orderStatus
    }
  })
}
