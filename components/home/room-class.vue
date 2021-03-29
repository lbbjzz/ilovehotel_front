<template>
  <div class="main-content">
    <p class="room-title">热门预定</p>

    <div class="destination">
      <span>城市：</span>
      <el-select v-model="value" placeholder="请选择" @change="cityChange">
        <el-option
          v-for="item in cityList"
          :key="item.id"
          :label="item.cityName"
          :value="item.id">
        </el-option>
      </el-select>
    </div>

    <div class="room-list" v-loading="loading">
      <div class="item" v-for="item in roomList" :key="item.roomId">
        <el-carousel trigger="click" height="200px" :autoplay="false">

          <!--        Todo: Array url list -->
          <el-carousel-item v-for="(pic,index) in item.url" :key="index">
            <img :src="pic" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
        <div class="hotel-title">
          <p class="hotel-name">{{ item.hotelName }}</p>
          <i class="el-icon-location location"><span>{{ item.cityName }}</span></i>
        </div>
        <p class="room-type">{{ item.roomTypeName }}</p>
      </div>
      <p style="color: #999; margin-top: 20px" v-if="roomList.length === 0">当前地区暂未开通服务~~~</p>
    </div>
  </div>

</template>

<script>
import controller from './controller/room-class.controller'

export default controller
</script>

<style lang="scss" scoped>

</style>
