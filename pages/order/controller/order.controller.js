import '/styles/pages/order/order.scss'
import {getOrderOfCurrentUser} from "../../../api/order/order";
import IhHeader from '/components/common/ihheader'
import Success from "../../../components/order/success";
import Wait from "../../../components/order/wait";
import Failed from "../../../components/order/failed";
import Comment from "@/components/order/comment";
import el from "element-ui/src/locale/lang/el";

export default {
  name: "order",
  components: {
    IhHeader,
    Success,
    Comment,
    Wait,
    Failed,
  },
  data() {
    return {
      orderSuccess: true,
      orderWait: false,
      orderComment: false,
      orderFailed: false,
      successOrder: [],
      waitOrder: [],
      commentOrder: [],
      failedOrder: [],
      //订单状态
      orderStatus: 1
    }
  },

  created() {
    this.getOrderM()
  },

  methods: {
    success() {
      this.orderSuccess = true
      this.orderWait = false
      this.orderComment = false
      this.orderFailed = false
      this.orderStatus = 1
      this.getOrderM()
    },

    comment() {
      this.orderSuccess = false
      this.orderWait = false
      this.orderComment = true
      this.orderFailed = false
      this.orderStatus = 3
      this.getOrderM()
    },

    wait() {
      this.orderSuccess = false
      this.orderWait = true
      this.orderComment = false
      this.orderFailed = false
      this.orderStatus = 0
      this.getOrderM()
    },

    failed() {
      this.orderSuccess = false
      this.orderWait = false
      this.orderComment = false
      this.orderFailed = true
      this.orderStatus = 2
      this.getOrderM()
    },

    getOrderM() {
      console.log(this.orderStatus, 'status')
      getOrderOfCurrentUser(this.orderStatus).then(res => {
        if (res.data.code === 80400) {
          this.$message({
            message: '未登录或登录状态已过期，请重新登录',
            type: 'warning'
          })
          localStorage.removeItem('loginData')
          setTimeout(
            this.$router.push({
              name: 'login-login'
            }), 2000)
        } else if (res.data.code === 80200) {
          if (this.orderStatus === 0) {
            this.waitOrder = res.data.data.records
          } else if (this.orderStatus === 1) {
            this.successOrder = res.data.data.records
          } else if (this.orderStatus === 2) {
            this.failedOrder = res.data.data.records
          } else if (this.orderStatus === 3) {
            this.commentOrder = res.data.data.records
          }
          console.log(this.successOrder, 'success')
          console.log(this.waitOrder, 'wait')
          console.log(this.failedOrder, 'failed')
          console.log(this.commentOrder, 'comment')
        }
      })
    }
  }
}
