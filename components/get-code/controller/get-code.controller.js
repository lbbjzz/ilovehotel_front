import '@/styles/components/get-code/get-code.scss'
import {getCodeApi} from "@/api/get-code/get-code";

export default {
  name: "get-code",
  props: ['newCode'],
  data() {
    return {
      codeImg: '',
      code: '',
      //标识符，解决SameSite问题
      only: ''
    }
  },
  methods: {
    getCodeTest() {
      getCodeApi().then(res => {
        // console.log(res)
        this.codeImg = window.URL.createObjectURL(res.data)
        this.only = res.headers.only
        // console.log(this.only, 'headers')
        this.$emit('only', this.only)
      })
    },
    codeTrans() {
      this.$emit('code', this.code)
      // console.log(this.code)
    }
  },
  created() {
    this.getCodeTest()
  }
}
