import '@/styles/pages/reset-pwd/reset-pwd.scss'
import {emailCodeVerify, getEmailCode} from "@/api/register/register";
import {getCodeApi} from "@/api/get-code/get-code";

export default {
  data() {
    return {
      step1: true,
      step2: false,
      codeImg: '',
      emailForm: {
        email: ''
      },
      emailCodeForm: {
        emailCode: ''
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
    }
  },
  methods: {
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
          getEmailCode(this.emailForm.email, this.code).then(res => {
            if (res.data.code === 80300) {
              this.$message({
                message: '验证码错误！',
                type: 'error'
              })
              getCodeApi().then(res => {
                this.codeImg = window.URL.createObjectURL(res.data)
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
              }
            }
          })
        }
      })
    },

    emailVerify() {
      emailCodeVerify(this.emailCodeForm.emailCode, this.emailForm.email).then(res => {
        if (res.data.code === 80703) {
          this.$message({
            message: '验证码错误，请重新输入！',
            type: 'error'
          })
        } else {
          this.$message({
            message: '验证成功',
            type: 'success'
          })
          this.step2 = false
          this.step3 = true
        }
      })
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
  }
}
