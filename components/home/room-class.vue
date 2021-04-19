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
      <el-button type="primary" @click="navigate">导航</el-button>
    </div>


    <div class="room-list" v-loading="loading">
      <div class="item" v-for="(item,index) in roomTypeList" :key="index">
        <el-carousel trigger="click" height="200px" :autoplay="false">
          <el-carousel-item v-for="(pic,index) in item.url" :key="index">
            <img :src="pic" width="100%" height="100%">
          </el-carousel-item>
        </el-carousel>
        <div class="hotel-title">
          <p class="room-type">{{ item.roomTypeName }}</p>
          <i class="el-icon-location location" v-if="item.cityName"><span>{{ item.cityName }}</span></i>
        </div>
        <div class="room-intro">
          <p class="room-price">￥{{ item.price }}</p>
          <p class="room-order" @click="roomOrder(item.roomTypeId)">立即预定</p>
        </div>
      </div>
    </div>
    <p style="color: #999; margin: 50px auto ;width: 100px">暂无更多~~~</p>
  </div>

</template>

<script>
import controller from './controller/room-class.controller'

export default controller
</script>

<style lang="scss" scoped>

</style>
