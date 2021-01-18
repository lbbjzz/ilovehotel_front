import '@/styles/pages/register/register.scss'


export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        rePassword: ''
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: "请输入邮箱！",
            trigger: 'blur',
          }
        ],
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
        ],
        rePassword: [
          {
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

    toRegister() {
      this.$refs.registerForm.validate(async val => {
        if (!val) return
        this.form.password !== this.form.rePassword ? this.$message({
          type: 'error',
          message: '两次输入的密码不一致'
        }):this.$message({
          type: 'success',
          message: '成功'
        })
      })
    }
  }
}
