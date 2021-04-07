import '/styles/components/order/wait.scss'
import {toPay, toCancel} from "~/api/order/wait";

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
        window.open(routerData.href, '_blank')
      })
    },

    toCancelM(val) {
      toCancel(val).then(res => {
        if (res.data.code === 80200) {
          this.$confirm('您确定要取消订单吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '取消成功!'
            });
            location.reload()
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      })
    }
  }
}
