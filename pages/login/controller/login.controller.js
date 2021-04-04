import '@/styles/pages/login/login.scss'
import getCode from "~/components/get-code/get-code";
import {login} from "@/api/login/login";
import {getCodeApi} from "~/api/get-code/get-code";
import {mapGetters} from "vuex";
import ihFooter from "@/components/common/ihfooter"

export default {
  name: "Login",
  components: {
    getCode,
    ihFooter
  },
  data() {
    return {
      codeImg: '',
      code: '',
      pwdType: 'password',
      iconType: 'iconfont icon-browse',
      //标识符，解决SameSite问题
      only: '',
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: 'blur'
          },
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['isLogin']),
  },
  methods: {
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = 'text' : this.pwdType = 'password';
      this.iconType === 'iconfont icon-browse' ? this.iconType = 'iconfont icon-Notvisible1' : this.iconType = 'iconfont icon-browse'
    },

    onLogin() {
      // console.log(this.form, 'loginForm_log')
      // console.log(this.code, 'getCodeTrans')
      this.$refs.loginForm.validate(async val => {
        if (!val) return
        if (this.code === '') {
          this.$message({
            message: '请输入验证码！',
            type: 'error'
          })
        } else {
          login(this.form.username, this.form.password, this.code, this.only).then(res => {
            // console.log(res, 'login_log')
            if (res.data.code === 80301) {
              this.$message({
                message: '验证码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
                this.only = res.headers.only
              })
            } else if (res.data.code === 80200) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.loginSuccess(res.data.data)
              this.$router.push({
                name: 'index',
              })
              setTimeout(this.toHome, 1000)
            } else {
              this.$message({
                message: '用户名或密码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
              })
            }
          })
        }
      })
    },

    toHome() {
      this.$router.push({path: '/'})
    },

    forgetPwd() {
      this.$router.push({
        name: 'reset-pwd-reset-pwd'
      })
    },
    toRegister() {
      this.$router.push({
        name: 'register-register'
      })
    },
    getCodeInput(code) {
      // console.log(code, 'code')
      this.code = code
    },

    getOnly(val) {
      this.only = val
      console.log(val, 'getOnly')
    },

    //Vuex
    loginSuccess(loginData) {
      this.$store.commit('login', loginData)
    }
  },
  created() {
    this.getOnly()
  }
}
