import {request} from "@/api/request";

export function getEmailCode(email){
  return request({
    url: '/hotelsystem/email/sendEmail',
    method: 'post',
    params: {
      email
    }
  })
}
