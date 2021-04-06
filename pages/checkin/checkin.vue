<template>
  <div>
    <ih-header style="position: fixed; top: 0; z-index: 1000"/>
    <div class="info-success">
      <img :src="imageSuccess.url">
      <p>您已下单成功,请在预定时间内尽快登记入住！</p>
    </div>
    <div class="checkin">
      <div class="checkin-order">
        <div class="checkin-order-left">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in details.imageList" :key="index">
              <!--              <el-image :src="item"/>-->
              <inner-image-zoom :src="item" :zoomSrc="item"/>
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
          <UploadInfo @sendUserInfo="getOCRInfo" style="margin-top: 20px;margin-left: 100px"/>
          <p style="margin-top:10px;font-size: 13px;color: #99a9bf;font-weight: bold;margin-left: 100px">
            上传身份证,完成入住手续（系统不会保存您的证件照）</p>
          <el-form v-model="checkinInfo" style="width: 400px">
            <el-form-item style="margin-top: 20px" label="姓名：" label-width="100px">
              <el-input v-model="checkinInfo.name" disabled style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item label="身份证号：" label-width="100px">
              <el-input v-model="checkinInfo.idcard" disabled style="width: 300px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="check" style="float:right">入住</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import controller from './controller/checkin.controller'

export default controller
</script>
