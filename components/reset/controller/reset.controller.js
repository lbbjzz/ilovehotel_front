import getCode from '@/components/get-code/get-code'
import {getEmailCode} from "@/api/reset-pwd/reset-pwd";
import {getCodeApi} from "@/api/get-code/get-code";

export default {
  name: 'reset',
  props: ['emailData', 'stepIsShow'],
  components: {
    getCode
  },
  data() {
    return {
      email: '',
      code: '',
      codeImg: '',
      emailCode: '',
      step1: true,
      step2: false
    }
  },
  watch: {
    emailData: {
      handler(val) {
        this.email = val
      },
      deep: true,
      immediate: true
    },
    stepIsShow: {
      handler(val) {
        this.step1 = val
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getCodeInput(code) {
      this.code = code
    },
    cancelStep() {
      this.step1 = false
      this.$emit('cancel', this.step1)
    },
    getEmailCodeM() {
      // console.log(this.emailForm.email,'email')
      if (this.code === '') {
        this.$message({
          message: '请输入验证码！',
          type: 'error'
        })
      } else {
        getEmailCode(this.email, this.code).then(res => {
          if (res.data.code === 80300) {
            this.$message({
              message: '验证码错误！',
              type: 'error'
            })
            getCodeApi().then(res => {
              this.codeImg = window.URL.createObjectURL(res.data)
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
    }
  }
}
