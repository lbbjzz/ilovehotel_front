<template>
  <div class="ih-head">
    <div class="ih-nav">
      <!--      <nuxt-link to="/login/Login">登录</nuxt-link>-->
      <div class="logo">
        <img src="../../static/img/logo-pic.png" alt="" @click="toHome">
        <img src="../../static/img/logo-title.png" alt="" @click="toHome">
      </div>
      <div class="log-in">
        <span @click="toLogin" v-if="!isLogin">登录</span>
        <span @click="toRegister" v-if="!isLogin">注册</span>
        <div class="avatar" v-if="isLogin">
          <el-popover
            placement="bottom"
            trigger="hover">
            <div class="user-info">
              <div class="user-info-title" v-if="hours<8&&hours>=5">
                <i class="el-icon-sunrise"></i>
                {{ username }}会员,早上好!
              </div>
              <div class="el-icon-sunrise-1" v-if="hours<11&&hours>=8">
                <i class="el-icon-sunny"></i>
                {{ username }}会员,上午好!
              </div>
              <div class="user-info-title" v-if="hours<13&&hours>=11">
                <i class="el-icon-sunny"></i>
                {{ username }}会员,中午好!
              </div>
              <div class="user-info-title" v-if="hours<18&&hours>=13">
                <i class="el-icon-sunset"></i>
                {{ username }}会员,下午好!
              </div>
              <div class="user-info-title" v-if="hours<24&&hours>=18">
                <i class="el-icon-moon"></i>
                {{ username }}会员,晚上好!
              </div>
              <div class="user-info-title" v-if="hours<5&&hours>=0">
                <i class="el-icon-moon-night"></i>
                {{ username }}会员,晚上好!
              </div>
              <div class="user-info-profile" @click="userInfo">
                <i class="el-icon-user-solid"></i>
                个人信息
              </div>
              <div class="user-info-logout" @click="logoutM">
                <i class="el-icon-switch-button"></i>
                注销
              </div>
            </div>
            <el-avatar icon="el-icon-user-solid" :src="avatar" slot="reference"></el-avatar>
          </el-popover>
        </div>
      </div>
    </div>
    <!--    <el-carousel :interval="4000" type="card" height="500px" autoplay interval="3000" loop>-->
    <!--      <el-carousel-item v-for="item in imgList" :key="item.key">-->
    <!--        <img :src="item.url" width="100%" height="100%">-->
    <!--      </el-carousel-item>-->
    <!--    </el-carousel>-->
  </div>
</template>

<script>
import controller from './controller/ihheader.controller'

export default controller
</script>

<style scoped>

</style>
