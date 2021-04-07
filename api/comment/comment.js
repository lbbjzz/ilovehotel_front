import {request} from "@/api/request";

export function commentAdd(content, orderId, star) {
  return request({
    url: '/hotelsystem/comment/add',
    method: 'post',
    params: {
      content,
      orderId,
      star
    }
  })
}
