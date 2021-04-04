<template>
  <div>
    <p class="order-title">已取消订单</p>
    <div v-if="failedList.length === 0" class="order-none">当前暂无已取消款订单</div>
    <div v-for="(item,index) in failedList" :key="index" class="order-content">
      <img class="cancel-order" :src="item.imageList[0]">
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
      </div>
    </div>
  </div>

</template>

<script>
import controller from './controller/failed.controller'

export default controller
</script>
