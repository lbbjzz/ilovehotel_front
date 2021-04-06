<template>
  <div>
    <ih-header style="position: fixed;top: 0;z-index: 1000;"></ih-header>
    <div style="z-index: 1; margin-top: 80px">
      <home></home>
    </div>
    <!--    <ih-footer style="margin-left: 50%; transform: translateX(-50%)"></ih-footer>-->
  </div>
</template>
<script>

import ihFooter from "@/components/common/ihfooter"
import ihHeader from "@/components/common/ihheader";
import home from "~/components/home/home";

export default {
  components: {ihHeader, ihFooter, home},
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>
