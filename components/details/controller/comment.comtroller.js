import '../../../styles/components/details/comment.scss'
import 'assets/fonts-ele/style.css'

export default {
  props: ['commentList'],
  name: "comment",
  data() {
    return {
      comment: [],
      value: 1.1,
      iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
    }
  },
  watch: {
    commentList: {
      handler(val) {
        // console.log(val, 'props')
        this.comment = val
      },
      immediate: true,
      deep: true
    }
  },
  methods: {}
}
