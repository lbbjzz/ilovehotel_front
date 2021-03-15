<template>
  <div>
    <el-carousel :interval="4000" type="card" height="500px" autoplay interval="3000" loop>
      <el-carousel-item v-for="item in imgList" :key="item.key">
        <a :href="item.link">
          <img :src="item.url" width="100%" height="100%">
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import controller from './controller/home.controller'

export default controller
</script>

<style scoped>

</style>
