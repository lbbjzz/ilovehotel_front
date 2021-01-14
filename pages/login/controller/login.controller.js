import '@/styles/pages/login/login.scss'
import getCode from "~/components/getCode/getCode";
import {login} from "@/api/login/login";

export default {
  name: "Login",
  components: {
    getCode
  },
  data() {
    return {
      code: '',
      codeImg: '',
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
        ],
        code: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onLogin() {
      console.log(this.form, 'loginForm_log')
      console.log(this.code, 'getCodeTrans')
      login(this.form.username, this.form.password, this.code).then(res => {
        console.log(res, 'login_log')
      })
    },
    toRegister() {
    },
    getCodeInput(code) {
      // console.log(code, 'code')
      this.code = code
    }
  },
  created() {
  }
}
