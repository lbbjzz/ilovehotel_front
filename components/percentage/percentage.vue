<template>
  <div>
    <el-progress type="circle" :width="60" :height="60"
                 :percentage="percent" :status="pStatus">
    </el-progress>
  </div>
</template>

<script>
import controller from './controller/percentage.controller'

export default controller
</script>

<style lang="scss" scoped>

</style>
