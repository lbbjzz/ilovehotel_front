<template>
  <div>
    <el-carousel :interval="4000" type="card" height="500px" autoplay loop>
      <el-carousel-item v-for="item in cityList" :key="item.id">
          <img :src="item.imageUrl" width="100%" height="100%" @click="toDetails(item.id)">
      </el-carousel-item>
    </el-carousel>
    <hotel-class style="margin-top: 50px"></hotel-class>
    <room-class></room-class>
  </div>
</template>

<script>
import controller from './controller/home.controller'

export default controller
</script>

<style scoped>

</style>
