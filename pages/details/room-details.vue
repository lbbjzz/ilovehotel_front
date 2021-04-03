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
          <p>￥{{ roomTypeDetails.price }}</p>
          <el-date-picker
            v-model="timeRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyyMMdd"
            @change="timeRangeChange"
            :picker-options="pickerOptions">
          </el-date-picker>
          <el-tabs v-model="tabModel" @tab-click="getCityId" type="border-card" style="margin-top: 50px">
            <el-tab-pane v-for="item in cityList" :key="item.id" :label="item.cityName" :name="item.id">
              <p v-if="timeRange.length ===0 ">{{ info }}</p>
              <el-button v-for="item in roomList" :key="item.id" @click="chooseRoom(item.id)">
                {{ item.number }}
              </el-button>
              <p v-if="roomList.length===0 && timeRange.length!==0">当前城市暂无此房型！</p>
            </el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="makeOrder">立即预定</el-button>
          <el-button @click="payM">立即支付</el-button>
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
