<template>
  <div class="login">
    <el-form class="loginForm" ref="loginForm" :model="form" :rules="rules">
      <!--      <h3 class="title">欢迎您，尊敬的iLoveHotel会员！</h3>-->
      <img class="logo-img"
           src="/img/logo.png"
      />
      <h3>登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名" maxlength="10" clearable>
          <i slot="prefix" class="el-icon-user input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="pwdType" v-model="form.password" auto-complete="off" placeholder="请输入密码" maxlength="14"
                  clearable>
          <i slot="prefix" class="el-icon-lock input-icon"></i>
          <i slot="suffix" v-if="this.form.password!==''" :class="iconType" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <get-code @code="getCodeInput" :newCode="codeImg"></get-code>
      </el-form-item>
      <el-form-item style="margin-top: 18px">
        <el-button style="width: 100%;margin-top: 10px" type="login" @click="onLogin">
          <p>
            <span class="sign">登</span>
            <span class="in">录</span>
          </p>
        </el-button>
      </el-form-item>
      <p style="margin-top: 36px">
        <span class="forgetPwd" @click="forgetPwd">忘记密码？</span>
        <span class="toRegister" @click="toRegister">前去注册 ></span>
      </p>
    </el-form>
  </div>
</template>

<script>
import controller from './controller/login.controller'

export default controller

</script>

