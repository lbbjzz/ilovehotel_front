import '@/styles/components/getCode/getCode.scss'
import {getCodeApi} from "@/api/login/getCode";

export default {
  name: "getCode",
  data() {
    return {
      codeImg: '',
      code: ''
    }
  },
  methods: {
    getCodeTest() {
      getCodeApi().then(res => {
        console.log(res)
        this.codeImg = window.URL.createObjectURL(res.data)
      })
    },
    codeTrans(){
      this.$emit('code',this.code)
      // console.log(this.code)
    }
  },
  created() {
    getCodeApi().then(res => {
      this.codeImg = window.URL.createObjectURL(res.data)
      // console.log(res.data)
    })
  }
}
