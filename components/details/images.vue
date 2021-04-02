<template>
  <div>
    <div v-for="(item,index) in images" :key="index" class="image-content">
      <el-image :src="item"></el-image>
    </div>
  </div>
</template>

<script>
import controller from './controller/images.controller'

export default controller
</script>
