<template>
  <div class="reset-pwd">
    <el-form class="resetForm" ref="getEmailCodeForm" :model="emailForm" :rules="emailRules" v-if="step1">
      <!--      <h3 class="title">欢迎您，尊敬的iLoveHotel会员！</h3>-->
      <img class="logo-img"
           src="/img/logo.png"
      />
      <el-form-item prop="email">
        <el-input type="email" v-model="emailForm.email" auto-complete="off" placeholder="请输入邮箱" clearable>
          <i slot="prefix" class="el-icon-message input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <get-code @code="getCodeInput" :newCode="codeImg"></get-code>
      </el-form-item>
      <el-form-item style="margin-top: 18px">
        <el-button style="width: 100%;margin-top: 10px" type="primary" @click="getEmailCode">
          <p>
            <span class="registerAccount">发送验证码</span>
          </p>
        </el-button>
      </el-form-item>
      <p style="margin-top: 36px">
        <span class="forgetPwd" @click="toRegister">前去注册</span>
        <span class="toRegister" @click="toLogin">登录 ></span>
      </p>
    </el-form>
    <el-form class="resetForm" ref="emailCodeForm" :model="emailCodeForm" :rules="codeRules" v-if="step2">
      <img class="logo-img"
           src="/img/logo.png"
      />
      <el-form-item prop="emailCode">
        <el-input type="text" v-model="emailCodeForm.emailCode" auto-complete="off" placeholder="请输入邮箱验证码" maxlength="4"
                  clearable>
          <i slot="prefix" class="el-icon-key"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-top: 18px">
        <el-button style="width: 100%;margin-top: 10px" type="primary" @click="emailVerify">
          <p>
            <span class="registerAccount">验证邮箱</span>
          </p>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import controller from './controller/reset-pwd.controller'
export default controller
</script>

<style scoped>

</style>
