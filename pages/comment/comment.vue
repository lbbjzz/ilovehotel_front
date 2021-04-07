<template>
  <div>
    <ih-header style="position: fixed; top: 0; z-index: 1000"/>
    <div class="info-success">
      <img :src="imageSuccess.url">
      <p>感谢您的入住，请留下您对我们的建议！</p>
    </div>
    <div class="checkin">
      <div class="checkin-order">
        <div class="checkin-order-left">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in details.imageList" :key="index">
              <el-image :src="item"/>
              <!--              <inner-image-zoom :src="item" :zoomSrc="item"/>-->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="checkin-order-right">
          <p class="title">{{ details.roomTypeName }}</p>
          <div class="order-info">
            <div class="info-info">
              <div class="order-info-1">
                <div class="front">总价：</div>
                <div class="back">￥{{ details.price }}</div>
                <div class="tips">{{ dateRangeA }}至{{ dateRangeB }}，共{{ dateDis }}天
                </div>
              </div>
            </div>
            <div class="order-tips"
                 v-if="details.roomTypeId === 1 || details.roomTypeId === 2 || details.roomTypeId === 3">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-dish"/><span>自助餐食</span>
            </div>
            <div class="order-tips"
                 v-if="details.roomTypeId === 4 || details.roomTypeId === 5 || details.roomTypeId === 6">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-fork-spoon"/><span>专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
            </div>
            <div class="order-tips" v-if="details.roomTypeId === 7">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-knife-fork"/><span>VIP专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
              <i class="el-icon-first-aid-kit"/><span>医疗服务</span>
            </div>
          </div>
          <el-rate
            style="margin-top: 50px;margin-left: 6px"
            show-score
            allow-half
            v-model="rate"
            :icon-classes="iconClasses"
            void-icon-class="icon-rate-face-off"
            text-color="#ff9900"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            score-template="{value}分">
          </el-rate>
          <el-input
            style="margin-top: 10px"
            type="textarea"
            :rows="4"
            placeholder="请输入评价（100字以内）"
            maxlength="100"
            show-word-limit
            v-model="textarea">
          </el-input>
          <el-button type="primary" style="float: right;margin-top: 20px" @click="commentAddM">提交评价</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from './controller/comment.controller'

export default controller
</script>

<style scoped>

</style>
