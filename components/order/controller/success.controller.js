import '../../../styles/components/order/success.scss'
import {checkinIsFalse} from "../../../api/order/success";

export default {
  props: ['successOrder'],
  name: "order",
  data() {
    return {
      successList: [],

    }
  },

  watch: {
    successOrder: {
      handler(val) {
        this.successList = val
      },
      immediate: true,
      deep: true
    }
  },

  methods: {
    checkIn(val) {
      checkinIsFalse(val).then(res => {
        if (res.data.code === 80200) {
          this.$router.push({
            name: 'checkin-checkin',
            query: {
              orderId: val
            }
          })
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
