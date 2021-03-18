export default {
  props: ['per', 'sta'],
  data() {
    return {
      percent: 0,
      pStatus: ''
    }
  },
  watch: {
    per: {
      handler(val) {
        this.percent = val
      },
      immediate: true
    },
    sta: {
      handler(val) {
        this.pStatus = val
      },
      immediate: true
    }
  },
  methods() {

  }
}
