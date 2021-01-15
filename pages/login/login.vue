<template>
  <div class="login">
    <el-form class="loginForm" ref="loginForm" :model="form" :rules="rules">
      <h3 class="title">欢迎您，尊敬的iLoveHotel会员！</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名" clearable>
          <i slot="prefix" class="el-icon-user input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="pwdType" v-model="form.password" auto-complete="off" placeholder="请输入密码" clearable>
          <i slot="prefix" class="el-icon-lock input-icon"></i>
          <i slot="suffix" v-if="this.form.password!==''" :class="iconType" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <get-code @code="getCodeInput"></get-code>
      </el-form-item>
      <el-form-item style="margin-top: 18px">
        <el-button style="width: 100%" type="primary" @click="onLogin">
          登录
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="toRegister">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import controller from './controller/login.controller'

export default controller

</script>

<style scoped>
</style>
