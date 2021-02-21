<template>
  <div class="ih-head">
    <div class="ih-nav">
      <!--      <nuxt-link to="/login/Login">登录</nuxt-link>-->
      <div class="log-in">
        <p @click="toLogin" v-if="!isLogin">登录</p>
        <el-avatar icon="el-icon-user-solid" :src="avatar" v-if="isLogin"></el-avatar>
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
