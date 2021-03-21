import '@/styles/components/common/ihheader.scss'
import {mapGetters} from "vuex";
import {logout} from "@/api/home/ihheader";
import {userDetail} from "@/api/user-info/user-info";

const date = new Date()
const hours = date.getHours()
export default {

  data() {
    return {
      id: '',
      hours: hours,
      isLogin: false,
      username: '',
      avatar: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png',
    }
  },
  created() {
    this.id = this.$route.query.id
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

    toHome() {
      this.$router.push({
        name: 'index'
      })
    },

    userInfo() {
      console.log(this.id)
      this.$router.push({
        name: 'user-info-user-info',
      })
    },

    toRegister() {
      this.$router.push({
        name: 'register-register'
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
          if (this.$route.name === 'index') {
            location.reload()
          } else {
            this.$router.push({
              name: 'index'
            })
          }
        } else {
          this.$message({
            type: 'error',
            message: '发生位置错误，请稍后重试！'
          })
        }
      })
    }
  }
}
