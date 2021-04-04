import '/styles/components/order/wait.scss'

export default {
  props: ['waitOrder'],
  name: "wait",
  data() {
    return {
      waitList: [],
    }
  },

  watch: {
    waitOrder: {
      handler(val) {
        this.waitList = val
      },
      deep: true,
      immediate: true
    }
  },

  methods: {}
}
