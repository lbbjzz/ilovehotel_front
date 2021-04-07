<template>
  <div>
    <p class="order-title">待评价订单</p>
    <div v-if="commentList.length === 0" class="order-none">当前暂无待评价订单</div>
    <div v-for="(item,index) in commentList" :key="index" class="order-content-comment">
      <img :src="item.imageList[0]">
      <div class="order-info">
        <div class="order-info-1">
          <span class="start">{{ item.roomTypeName }}</span>
          <span class="back">预定时间：{{ item.createTime }}</span>
        </div>
        <div style="width: 660px; display: flex;justify-content: space-between">
          <div class="order-info-2">
            <i class="el-icon-location">{{ item.cityName }}</i>
            <span style="margin-left: 20px">入住时间：{{
                item.checkinTime.substring(5, 10)
              }}至{{ item.checkoutTime.substring(5, 10) }}</span>
          </div>
          <div class="order-info-3">
            <span>总价：￥{{ item.price }}</span>
          </div>
        </div>
        <div style="width: 660px;display: flex;justify-content: flex-end">
          <el-button type="primary" size="small" style="margin-top: 10px" @click="">自主退房</el-button>
          <el-button type="primary" size="small" style="margin-top: 10px" @click="toComment(item.id)">立即评价</el-button>
        </div>
      </div>
    </div>
    <div v-if="commentList.length === 10" class="order-none-noMore">更多订单信息请联系管理员</div>
  </div>
</template>

<script>
import controller from './controller/comment.controller'

export default controller

</script>

<style scoped>

</style>
