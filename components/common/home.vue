<template>
  <div>
    <el-carousel :interval="4000" type="card" height="500px" autoplay interval="3000" loop>
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <a>
          <img :src="item.pictureUrl" width="100%" height="100%">
        </a>
      </el-carousel-item>
    </el-carousel>
    <hotel-class style="margin-top: 50px"></hotel-class>
  </div>
</template>

<script>
import controller from './controller/home.controller'

export default controller
</script>

<style scoped>

</style>
