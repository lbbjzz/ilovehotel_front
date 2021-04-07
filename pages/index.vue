<template>
  <div>
    <ih-header style="position: fixed;top: 0;z-index: 1000;"></ih-header>
    <div style="z-index: 1; margin-top: 80px">
      <home></home>
    </div>
    <!--    <ih-footer style="margin-left: 50%; transform: translateX(-50%)"></ih-footer>-->
    <el-backtop></el-backtop>
  </div>
</template>
<script>

import ihFooter from "@/components/common/ihfooter"
import ihHeader from "@/components/common/ihheader";
import home from "~/components/home/home";

export default {
  components: {ihHeader, ihFooter, home},
  data() {
    return {
      //窗口大小监听
      screenWidth: '',
      screenHeight: '',
    }
  },

  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    if (this.screenWidth < 1025) {
      let tip = confirm('您似乎在移动设备上访问此页面，是否前往移动端页面？')
      if (tip) {
        window.location.href = 'http://h5.lbbjzz.com'
      }
    }
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        console.log(this.screenWidth, 'width')
        console.log(this.screenHeight, 'height')
        if (this.screenWidth < 1025) {
          let tip = confirm('您似乎在移动设备上访问此页面，是否前往移动端页面？')
          if (tip) {
            window.location.href = 'http://h5.lbbjzz.com'
          }
        }
      })();
    };
  },

}
</script>

<style scoped>
</style>
