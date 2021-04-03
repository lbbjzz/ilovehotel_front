<template>
  <div>
    <el-form class="edit-form" v-if="step1">
      <el-form-item label="邮箱：" label-width="100px" prop="email">
        <el-input type="email" v-model="email" size="large" style="width: 300px" disabled>
          <i slot="prefix" class="el-icon-message input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="图形验证码：" label-width="100px" style="width: 400px;">
        <get-code @only="getOnly" @code="getCodeInput" :newCode="codeImg"></get-code>
      </el-form-item>
      <el-form-item label="邮箱验证码：" label-width="100px">
        <el-input type="text" v-model="emailCode" auto-complete="off" placeholder="请输入邮箱验证码" maxlength="4"
                  style="width: 185px;"
                  clearable>
          <i slot="prefix" class="el-icon-key"></i>
        </el-input>
        <el-button type="primary" @click="getEmailCodeM">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="cancelStep" style="margin-left: 20%;margin-top: 3%;width: 100px">取消
        </el-button>
        <el-button @click="emailVerify"
                   style="margin-left: 5%;margin-top: 3%;width: 100px"
                   type="primary">下一步
        </el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import controller from './controller/reset.controller'

export default controller
</script>

<style scoped>

</style>
