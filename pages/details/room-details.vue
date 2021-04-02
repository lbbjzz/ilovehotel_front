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
        </div>
      </div>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="content-tab">
        <el-tab-pane label="详情" name="first">
          <Images :image-list="imageList"></Images>
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
