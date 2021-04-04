import '/styles/components/order/failed.scss'

export default {
  props: ['failedOrder'],
  name: "failed",
  data() {
    return {
      failedList: [],
    }
  },

  watch: {
    failedOrder: {
      handler(val) {
        this.failedList = val
      }
    }
  }
}
