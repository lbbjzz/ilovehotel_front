<template>
  <div>
    <p>酒店简介</p>
    <el-row>
      <el-col :span="5" v-for="(item, index) in floorList" :key="item.floorId" :offset="index > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="toIntroDetails(item.floorId)">
          <img :src="item.url"
               class="image">
          <div style="padding: 14px;">
            <span>{{ item.floorName }}</span>
<!--            <div class="bottom clearfix">-->
<!--              <time class="time">{{ item.content }}</time>-->
<!--            </div>-->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import controller from './controller/home-class.controller'

export default controller
</script>

<style scoped>

p {
  text-align: center;
  font-size: 32px;
  margin-bottom: 50px;
  font-weight: bold;
  font-family: "Maiandra GD";
}

.el-row {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.el-col {
  height: 350px;
}

.el-card {
  cursor: pointer;
}

.el-card:hover {
  /*padding-bottom: -5px;*/
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  height: 240px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
