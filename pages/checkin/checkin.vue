<template>
  <div>
    <ih-header style="position: fixed; top: 0; z-index: 1000"/>
    <div class="content">
      <div class="content-order">
        <div class="content-order-left">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="(item,index) in details.imageList" :key="index">
              <!--              <el-image :src="item"/>-->
              <inner-image-zoom :src="item" :zoomSrc="item"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content-order-right">
          <p class="title">{{ details.roomTypeName }}</p>
          <div class="order-info">
            <div class="info-info">
              <div class="order-info-1">
                <div class="front">预订价：</div>
                <div class="back">￥{{ details.price }}</div>
                <div class="tips">共{{ dateDis }}天</div>
              </div>
            </div>
            <div class="order-tips" v-if="">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-dish"/><span>自助餐食</span>
            </div>
            <div class="order-tips" v-if="">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-fork-spoon"/><span>专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
            </div>
            <div class="order-tips" v-if="">
              <i class="el-icon-cpu"/><span>智能入住</span>
              <i class="el-icon-sunny"/><span>有窗</span>
              <i class="el-icon-stopwatch"/><span>无线网络</span>
              <i class="el-icon-knife-fork"/><span>VIP专属餐厅</span>
              <i class="el-icon-service"/><span>专属客服</span>
              <i class="el-icon-first-aid-kit"/><span>医疗服务</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UploadInfo @sendUserInfo="getOCRInfo"/>
    <el-form v-model="checkinInfo">
      <el-form-item>
        <el-input v-model="checkinInfo.name" label="姓名："></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="checkinInfo.idcard" label="身份证号："></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="check">入住</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import controller from './controller/checkin.controller'

export default controller
</script>
