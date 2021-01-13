<template>
  <div class="head">
    <div class="nav">
      <nuxt-link to="/login/Login">登录</nuxt-link>
    </div>
    <el-carousel :interval="4000" type="card" height="500px" autoplay interval="3000" loop>
      <el-carousel-item v-for="item in imgList" :key="item.key">
        <img :src="item.url" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      imgList: [
        {
          key: 1,
          url: require('@/assets/img/common.jpg')
        },
        {
          key: 2,
          url: require('@/assets/img/better.jpg')
        },
        {
          key: 3,
          url: require('@/assets/img/best.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  width: 100%;

  .nav {
    height: 80px;
    background-color: deepskyblue;
  }

  .el-carousel {
    background-color: skyblue;

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
}
</style>
