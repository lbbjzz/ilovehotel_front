<template>
  <div class="verify">
    <el-input type="text" auto-complete="off" placeholder="请输入验证码" v-model="code" @input="codeTrans">
      <i slot="prefix" class="el-icon-key"></i>
    </el-input>
    <img class="code-img"
         title="点击刷新"
         :src="codeImg"
         @click="getCodeTest"
    />
  </div>
</template>

<script>
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
    })
  }
}
</script>

<style lang="scss" scoped>

.verify {
  .el-input {
    width: 185px;
  }

  .code-img {
    float: right;
    width: 80px;
    height: 40px;
  }
}

</style>
