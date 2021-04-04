import '../../../styles/components/order/success.scss'

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

  methods: {}
}
