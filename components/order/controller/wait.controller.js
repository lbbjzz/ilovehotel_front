import '/styles/components/order/wait.scss'
import {toPay} from "~/api/order/wait";

export default {
  props: ['waitOrder'],
  name: "wait",
  data() {
    return {
      waitList: [],
      second: null,
      minute: null
    }
  },

  watch: {
    waitOrder: {
      handler(val) {
        this.waitList = val
      },
      deep: true,
      immediate: true
    },
  },

  methods: {
    // setTime(val) {
    //   this.minute = Math.floor(val / 60)
    //   this.second = val % 60
    //   val--;
    //   setTimeout(() => {
    //     this.setTime(val)
    //   }, 1000)
    // },
    //
    // test() {
    //   this.second = 12312312
    // }

    toPayM(val) {
      toPay(val).then(res => {
        let routerData = this.$router.resolve({name: 'pay-aliPay', query: {htmlData: res.data}})
        // 打开新页面
        window.open(routerData.href, '_self')
      })
    }
  }
}