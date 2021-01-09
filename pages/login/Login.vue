<template>
  <div class="login">
    <el-form class="loginForm" ref="loginForm" :model="form" :rules="rules">
      <h3 class="title">欢迎您，尊敬的iLoveHotel会员！</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名">
          <i slot="prefix" class="el-icon-user input-icon"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码">
          <i slot="prefix" class="el-icon-lock input-icon"></i>
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
import getCode from "~/components/getCode/getCode";
import {login} from "@/api/login/login";
import {getCodeApi} from "@/api/login/getCode";

export default {
  name: "Login",
  components: {
    getCode
  },
  data() {
    return {
      codeImg: '',
      form: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: 'blur'
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    getCodeTest() {
      getCodeApi().then(res => {
        console.log(res)
        this.codeImg = window.URL.createObjectURL(res.data)
      })
    },
    onLogin() {
      // console.log(this.form)
      login(this.form.username, this.form.password, this.form.code).then(res => {
        console.log(res)
      })
    },
    toRegister() {
    },
    getCodeInput(code) {
      // console.log(code, 'code')
      this.form.code = code
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
.login {
  height: 100%;
}

.loginForm {
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

  .title {
    margin-bottom: 20px;
  }

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 400px;
  border-radius: 6px;
  border: 1px black;
  box-shadow: 0 0 35px navy;
  padding: 25px 25px 25px 25px;

  .el-input {
    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 2px;
      margin-top: 14px;
    }
  }
}
</style>
