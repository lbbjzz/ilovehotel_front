<template>
  <div class="ih-head">
    <div class="ih-nav">
      <!--      <nuxt-link to="/login/Login">登录</nuxt-link>-->
      <div class="log-in">
        <p @click="toLogin" v-if="!isLogin">登录</p>
        <div class="avatar" v-if="isLogin">
          <el-popover
            placement="bottom"
            trigger="hover">
            <div class="user-info">
              <p class="user-info-title">{{ username }}会员,欢迎您!</p>
              <p class="user-info-profile">个人信息</p>
              <p class="user-info-logout" @click="logoutM">注销</p>
            </div>
            <el-avatar icon="el-icon-user-solid" :src="avatar" slot="reference"></el-avatar>
          </el-popover>
        </div>
      </div>
    </div>
    <el-carousel :interval="4000" type="card" height="500px" autoplay interval="3000" loop>
      <el-carousel-item v-for="item in imgList" :key="item.key">
        <img :src="item.url" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import controller from './controller/ihheader.controller'

export default controller
</script>

<style scoped>

</style>
