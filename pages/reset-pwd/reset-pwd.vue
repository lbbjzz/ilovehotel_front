<template>
  <div class="reset-pwd">
    <el-form class="resetForm" ref="getEmailCodeForm" :model="emailForm" :rules="emailRules" v-if="step1">
      <!--      <h3 class="title">欢迎您，尊敬的iLoveHotel会员！</h3>-->
      <img class="logo-img"
           src="/img/logo.png"
           @click="toHome"
      />
      <h3>忘记密码</h3>
      <el-form-item prop="email">
        <el-input type="email" v-model="emailForm.email" auto-complete="off" placeholder="请输入邮箱"
                  @keyup.enter.native="getEmailCode" clearable>
          <i slot="prefix" class="el-icon-message input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <get-code @only="getOnly" @code="getCodeInput" :newCode="codeImg" @keyup.enter.native="getEmailCode"></get-code>
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
           @click="toHome"
      />
      <h3>忘记密码</h3>
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
      <p style="margin-top: 36px">
        <span class="forgetPwd" @click="toRegister">前去注册</span>
        <span class="toRegister" @click="toLogin">登录 ></span>
      </p>
    </el-form>
    <el-form class="resetForm" ref="resetForm" :model="form" :rules="rules" v-if="step3">
      <img class="logo-img"
           src="/img/logo.png"
           @click="toHome"
      />
      <h3>忘记密码</h3>
      <el-form-item prop="password">
        <el-input :type="pwdType" v-model="form.password" auto-complete="off" placeholder="请输入密码(8~14位字符)"
                  @keyup.enter.native="resetPwd" maxlength="14" clearable>
          <i slot="prefix" class="el-icon-lock input-icon"></i>
          <i slot="suffix" v-if="this.form.password!==''" :class="iconType" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input :type="pwdType" v-model="form.rePassword" auto-complete="off" placeholder="请再次输入密码"
                  @keyup.enter.native="resetPwd" clearable>
          <i slot="prefix" class="el-icon-lock input-icon"></i>
          <i slot="suffix" v-if="this.form.rePassword!==''" :class="iconType" @click="showPwd"></i>
        </el-input>
      </el-form-item>
      <el-form-item style="margin-top: 18px">
        <el-button style="width: 100%;margin-top: 10px" type="primary" @click="resetPwd">
          <p>
            <span class="registerAccount">修改密码</span>
          </p>
        </el-button>
      </el-form-item>
      <p style="margin-top: 36px">
        <span class="forgetPwd" @click="toRegister">前去注册</span>
        <span class="toRegister" @click="toLogin">登录 ></span>
      </p>
    </el-form>
    <ih-footer></ih-footer>
  </div>
</template>

<script>
import controller from './controller/reset-pwd.controller'

export default controller
</script>

<style scoped>

</style>
