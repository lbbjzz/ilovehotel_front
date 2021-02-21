import '@/styles/pages/home/ihheader.scss'
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      imgList: [
        {
          key: 1,
          url: require('@/static/img/common.jpg')
        },
        {
          key: 2,
          url: require('@/static/img/better.jpg')
        },
        {
          key: 3,
          url: require('@/static/img/best.jpg')
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['isLogin']),
    ...mapGetters(['avatar'])
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: 'login-login'
      })
    },

  }
}
