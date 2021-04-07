<template>
  <div>
    <ih-header style="position: fixed;top: 0; z-index: 1000"/>
    <div class="content">
      <div class="content-title">
        <h1 v-if="releaseY!==''">{{ cityDetails.title }}</h1>
        <h1 v-if="releaseY===''">当前城市暂无推文</h1>
      </div>
      <div class="content-info" v-if="releaseY!==''">
        <span>城市:{{ cityDetails.cityName }}</span>
        <span>作者:{{ cityDetails.author }}</span>
        <span>发布时间:{{ releaseY }}年{{ releaseM }}月{{ releaseD }}日</span>
      </div>
      <div class="content-image">
        <div v-for="(item,index) in cityDetails.imageList" :key="index">
          <el-image :src="item" :preview-src-list="cityDetails.imageList"></el-image>
          <span>{{ content[index] }}</span>
        </div>
      </div>
      <div class="push" @click="toOrder" v-if="roomTypeId !== ''">
        <p class="title">想去{{ cityDetails.cityName }}吗？大家都在订：</p>
        <el-card shadow="hover">
          <el-image :src="image"></el-image>
          <div class="info-info">
            <p class="info-info-p">{{ roomTypeName }}</p>
            <i class="el-icon-location" id="info-info-i">{{ name }}</i>
          </div>
        </el-card>
      </div>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import controller from './controller/carousel-details.controller'

export default controller
</script>

