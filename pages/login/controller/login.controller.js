import '@/styles/pages/login/login.scss'
import getCode from "~/components/get-code/get-code";
import {login} from "@/api/login/login";
import {getCodeApi} from "~/api/get-code/get-code";
import {mapGetters} from "vuex";

export default {
  name: "Login",
  components: {
    getCode
  },
  data() {
    return {
      codeImg: '',
      code: '',
      pwdType: 'password',
      iconType: 'iconfont icon-browse',
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
          login(this.form.username, this.form.password, this.code).then(res => {
            // console.log(res, 'login_log')
            if (res.data.code === 80301) {
              this.$message({
                message: '验证码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
              })
            } else if (res.data.code === 80200) {
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.loginSuccess(res.data.data)
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

    //Vuex
    loginSuccess(loginData) {
      this.$store.commit('login', loginData)
    }
  },
  created() {
  }
}
