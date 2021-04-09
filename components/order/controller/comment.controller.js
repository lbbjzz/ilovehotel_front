import '/styles/components/order/comment.scss'

export default {
  props: ['commentOrder'],
  name: "comment",
  data() {
    return {
      commentList: [],
    }
  },

  watch: {
    commentOrder: {
      handler(val) {
        // console.log(val, 'val')
        this.commentList = val
        // console.log(this.commentList, 'commentList')
      },
      immediate: true,
      deep: true
    }
  },

  methods: {
    toComment(val) {
      this.$router.push({
        name: 'comment-comment',
        query: {
          orderId: val
        }
      })
    }
  }
}
