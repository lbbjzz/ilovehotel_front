import '@/styles/pages/home/ihheader.scss'
import {mapGetters} from "vuex";
import {logout} from "@/api/home/ihheader";

export default {
  data() {
    return {
      isLogin: false,
      username: '',
      avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
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
  mounted() {
    if (localStorage.getItem('loginData')) {
      this.isLogin = true
      this.avatar = JSON.parse(localStorage.getItem('loginData')).avatar
      this.username = JSON.parse(localStorage.getItem('loginData')).username
    }
  },
  computed: {
    // ...mapGetters(['isLogin']),
    // ...mapGetters(['avatar'])
  },
  methods: {
    toLogin() {
      this.$router.push({
        name: 'login-login'
      })
    },

    logoutM() {
      logout().then(res => {
        // console.log(res)
        if (res.data.code === 80200) {
          localStorage.removeItem('loginData')
          this.$message({
            type: 'success',
            message: '注销成功'
          })
          location.reload()
        }
      })
    }
  }
}
