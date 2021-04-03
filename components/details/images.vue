<template>
  <div>
    <div v-for="(item,index) in images" :key="index" class="image-content">
      <el-image :src="item"></el-image>
    </div>
    <div v-if="images.length === 0">
      <p style="font-weight: bold;color: #6C7084;font-size: 15px;text-align: center">暂无详情~~~</p>
    </div>
  </div>
</template>

<script>
import controller from './controller/images.controller'

export default controller
</script>
