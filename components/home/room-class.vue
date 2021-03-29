<template>
  <div class="main-content">
    <p class="room-title">热门预定</p>
    <div class="room-list">
      <div class="item" v-for="item in roomList" :key="item.roomId">
        <el-carousel height="200px">

          <!--        Todo: Array url list -->
          <el-carousel-item>
            <img :src="item.url" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
        <div class="hotel-title">
          <p class="hotel-name">{{ item.hotelName }}</p>
          <i class="el-icon-location location"><span>{{ item.cityName }}</span></i>
        </div>
        <p>房型：{{ item.roomTypeName }}</p>

      </div>
    </div>
  </div>

</template>

<script>
import controller from './controller/room-class.controller'

export default controller
</script>

<style lang="scss" scoped>

</style>
