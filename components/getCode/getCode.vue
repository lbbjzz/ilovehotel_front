<template>
  <div class="verify">
    <el-input type="text" auto-complete="off" placeholder="请输入验证码" v-model="code" @input="codeTrans" clearable>
      <i slot="prefix" class="el-icon-key"></i>
    </el-input>
    <img class="code-img"
         title="点击刷新"
         :src="this.newCode || codeImg"
         @click="getCodeTest"
    />
  </div>
</template>

<script>
import controller from './controller/getCode.controller'

export default controller
</script>

<style scoped>

</style>
