import '@/styles/pages/register/register.scss'
import {getEmailCode, emailCodeVerify, register} from "~/api/register/register";
import {getCodeApi} from "~/api/getCode/getCode";


export default {
  data() {
    return {
      step1: true,
      step2: false,
      step3: false,
      codeImg: '',
      emailForm: {
        email: ''
      },
      emailCodeForm: {
        emailCode: ''
      },
      form: {
        username: '',
        password: '',
        rePassword: ''
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
        username: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: 'blur'
          }
        ],
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

    register() {
      this.$refs.registerForm.validate(async val => {
        if (!val) return
        if (this.form.password !== this.form.rePassword) {
          this.$message({
            type: 'error',
            message: '两次输入的密码不一致'
          })
        } else {
          register(this.form.username, this.form.password ,this.emailForm.email).then(res => {
            console.log(res, 'register');
          })
        }
      })
    },

    toLogin(){
      this.$router.push({
        name: 'login-login'
      })
    },

    forgetPwd() {

    },
  }
}
