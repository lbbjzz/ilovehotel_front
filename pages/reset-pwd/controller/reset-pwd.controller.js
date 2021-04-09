import '@/styles/pages/reset-pwd/reset-pwd.scss'
import {getCodeApi} from "/api/get-code/get-code";
import {getEmailCode, emailCodeVerify, resetPwd} from "/api/reset-pwd/reset-pwd";
import ihFooter from "/components/common/ihfooter"

export default {
  components: {
    ihFooter
  },
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      codeImg: '',
      only: '',
      emailForm: {
        email: ''
      },
      emailCodeForm: {
        emailCode: ''
      },
      form: {
        password: '',
        rePassword: '',
      },
      emailRules: {
        email: [
          {
            type: 'email',
            required: true,
            message: "请输入邮箱！",
            trigger: 'blur',
          }
        ],
      },
      codeRules: {
        emailCode: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: 'blur'
          }
        ]
      },
      rules: {
        password: [
          {
            min: 8,
            required: true,
            message: "请输入密码！",
            trigger: 'blur'
          },
        ],
        rePassword: [
          {
            min: 8,
            required: true,
            message: "请确认密码！",
            trigger: 'blur'
          },
        ]
      },
      pwdType: 'password',
      iconType: 'iconfont icon-browse',
      code: ''
    }
  },
  methods: {
    showPwd() {
      this.pwdType === 'password' ? this.pwdType = 'text' : this.pwdType = 'password';
      this.iconType === 'iconfont icon-browse' ? this.iconType = 'iconfont icon-Notvisible1' : this.iconType = 'iconfont icon-browse'
    },

    getCodeInput(code) {
      this.code = code
    },

    getEmailCode() {
      // console.log(this.emailForm.email,'email')
      this.$refs.getEmailCodeForm.validate(async val => {
        if (!val) return
        if (this.code === '') {
          this.$message({
            message: '请输入验证码！',
            type: 'error'
          })
        } else {
          getEmailCode(this.emailForm.email, this.code, this.only).then(res => {
            if (res.data.code === 80300) {
              this.$message({
                message: '验证码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
                this.only = res.headers.only
              })
            } else if (res.data.code === 81513) {
              this.$message({
                message: '当前邮箱未注册！',
                type: 'error'
              })
            } else {
              if (res.data.code === 80200) {
                this.$message({
                  message: '邮件发送成功,有效时间三分钟',
                  type: 'success'
                })
                this.step1 = false
                this.step2 = true
              } else if (res.data.code === 80702) {
                this.$message({
                  message: '邮件已发送',
                  type: 'success'
                })
                this.step1 = false
                this.step2 = true
              }
            }
          })
        }
      })
    },

    emailVerify() {
      this.$refs.emailCodeForm.validate(async val => {
        if (!val) return
        emailCodeVerify(this.emailCodeForm.emailCode, this.emailForm.email).then(res => {
          if (res.data.code === 80703) {
            this.$message({
              message: '验证码错误，请重新输入！',
              type: 'error'
            })
          } else if (res.data.code === 80704) {
            this.$message({
              message: '请先获取邮箱验证码！',
              type: 'error'
            })
          } else if (res.data.code === 80200) {
            this.$message({
              message: '验证成功',
              type: 'success'
            })
            this.step2 = false
            this.step3 = true
          }
        })
      })
    },

    resetPwd() {
      this.$refs.resetForm.validate(async val => {
        if (!val) return
        if (this.form.password !== this.form.rePassword) {
          this.$message({
            type: 'error',
            message: '两次输入的密码不一致'
          })
        } else {
          resetPwd(this.emailForm.email, this.form.password).then(res => {
            if (res.data.code === 80200) {
              this.$message({
                type: 'success',
                message: '修改成功,请登录'
              })
              setTimeout(this.toLogin, 2000)
            }
          })
        }
      })
    },

    toHome() {
      this.$router.push({path: '/'})
    },

    toLogin() {
      this.$router.push({
        name: 'login-login'
      })
    },

    toRegister() {
      this.$router.push({
        name: 'register-register'
      })
    },

    getOnly(val) {
      this.only = val
      // console.log(val, 'getOnly')
    },
  }
}
