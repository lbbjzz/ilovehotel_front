<template>
  <div>
    <IhHeader/>
    <div class="content">
      <div class="content-order">
        <div class="content-order-left">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in imageList" :key="index">
              <el-image :src="item" :preview-src-list="imageList"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content-order-right">
          <p class="title">{{ roomTypeDetails.type }}</p>
          <div class="order-info">
            <div class="info-info">
              <div class="order-info-1">
                <div class="front">预订价：</div>
                <div class="back">￥{{ roomTypeDetails.price }}</div>
                <div class="tips">惊喜价</div>
              </div>
              <div class="order-rate">
                <div class="order-rate-2">
                  <p>{{ roomTypeDetails.star }}</p>
                  <p>评分</p>
                </div>
                <div class="order-rate-1">
                  <p>{{ commentList.length }}</p>
                  <p>累计评价</p>
                </div>
              </div>
            </div>
            <div class="order-tips" v-if="roomTypeDetails.id === 1||roomTypeDetails.id === 2||roomTypeDetails.id === 3">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-dish"/><span>自助餐食</span>
            </div>
            <div class="order-tips" v-if="roomTypeDetails.id === 4||roomTypeDetails.id === 5||roomTypeDetails.id === 6">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-fork-spoon"/><span>专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
            </div>
            <div class="order-tips" v-if="roomTypeDetails.id === 7">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-knife-fork"/><span>VIP专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
              <i class="el-icon-first-aid-kit"/><span>医疗服务</span>
            </div>
          </div>
          <div class="timepicker">
            <span class="title">入住时间：</span>
            <el-date-picker
              :clearable=false
              v-model="timeRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyyMMdd"
              @change="timeRangeChange"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>

          <el-tabs v-model="tabModel" @tab-click="getCityId" type="border-card" style="margin-top: 50px"
                   class="city-choose">
            <el-tab-pane v-for="item in cityList" :key="item.id" :label="item.cityName" :name="item.id">
              <p style="font-weight: bold;
                color: #6C7084;
                font-size: 14px;" v-if="timeRange.length === 0 ">{{ info }}</p>
              <span style="font-weight: bold;
                color: #6C7084;
                font-size: 14px;" v-if="timeRange.length !== 0 ">请选择您的房间：</span>
              <el-button v-for="item in roomList" :key="item.id" @click="chooseRoom(item.id)">
                {{ item.number }}
              </el-button>
              <p style="font-weight: bold;
                color: #6C7084;
                font-size: 14px;" v-if="roomList.length === 0 && timeRange.length !== 0">当前城市暂无此房型！</p>
            </el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="makeOrder" class="order-button">立即预定</el-button>
          <!--          <el-button @click="payM">立即支付</el-button>-->
        </div>
      </div>
      <el-tabs v-model="activeName" type="border-card" class="content-tab">
        <el-tab-pane label="详情" name="first">
          <Images :image-list="viewList"></Images>
        </el-tab-pane>
        <el-tab-pane label="评论" name="second">
          <Comment :comment-list="commentList"></Comment>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import controller from './controller/room-details.controller'

export default controller

</script>


<style scoped>

</style>
