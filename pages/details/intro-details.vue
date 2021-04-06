<template>
  <div class="content">
    <div class="content-title">
      <h1>{{ intro.name }}</h1>
    </div>
    <div>
      <el-image :src="intro.image"></el-image>
    </div>
    <div>{{ intro.content }}</div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import controller from './controller/intro-details.controller'

export default controller
</script>

<style scoped>

</style>
