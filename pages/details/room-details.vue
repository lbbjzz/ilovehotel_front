<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="酒店详情" name="first">
        <Images :image-list="imageList"></Images>
      </el-tab-pane>
      <el-tab-pane label="评论" name="second">
        <Comment :comment-list="commentList"></Comment>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import controller from './controller/room-details.controller'

export default controller

</script>


<style scoped>

</style>
