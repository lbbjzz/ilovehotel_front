<template>
  <div class="order">
    <IhHeader style="position: fixed; top: 0;z-index: 1000"/>
    <div class="main-content">
      <div class="main-content-left">
        <div class="inner">
          <div class="left-info" @click="success">
            <i class="el-icon-document-checked"></i>
            已付款
          </div>
          <div class="left-setting" @click="wait">
            <i class="el-icon-document-remove"></i>
            未付款
          </div>
          <div class="left-info" @click="comment">
            <i class="el-icon-document"></i>
            待评价
          </div>
          <div class="left-check" @click="failed">
            <i class="el-icon-document-delete"></i>
            已结束
          </div>
        </div>
      </div>
      <div class="main-content-right">
        <div v-if="orderSuccess">
          <Success :success-order="successOrder"/>
        </div>
        <div v-if="orderWait">
          <Wait :wait-order="waitOrder"/>
        </div>
        <div v-if="orderComment">
          <Comment :comment-order="commentOrder"></Comment>
        </div>
        <div v-if="orderFailed">
          <Failed :failed-order="failedOrder"/>
        </div>
      </div>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import controller from './controller/order.controller'

export default controller
</script>
