import '@/styles/pages/login/login.scss'
import getCode from "~/components/getCode/getCode";
import {login} from "@/api/login/login";
import {getCodeApi} from "~/api/getCode/getCode";

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
  methods: {
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = 'text' : this.pwdType = 'password';
      this.iconType === 'iconfont icon-browse' ? this.iconType = 'iconfont icon-Notvisible1' : this.iconType = 'iconfont icon-browse'
    },

    onLogin() {
      console.log(this.form, 'loginForm_log')
      console.log(this.code, 'getCodeTrans')
      this.$refs.loginForm.validate(async val => {
        if (!val) return
        if (this.code === '') {
          this.$message({
            message: '请输入验证码！',
            type: 'error'
          })
        } else {
          login(this.form.username, this.form.password, this.code).then(res => {
            console.log(res, 'login_log')
            if (res.data.code === 80301) {
              this.$message({
                message: '验证码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
              })
            } else {
              res.data.code === 80200 ? this.$router.push({path: '/'}) : this.$message({
                message: '用户名或密码错误！',
                type: 'error'
              })
            }
          })
        }
      })
    },

    forgetPwd() {

    },
    toRegister() {
      this.$router.push({
        name: 'register-register'
      })
    }
    ,
    getCodeInput(code) {
      // console.log(code, 'code')
      this.code = code
    }
  },
  created() {
  }
}
